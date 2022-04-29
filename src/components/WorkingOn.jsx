import React, {useEffect, useState} from 'react';
import { truncate } from '../util/text';

export function WorkingOn(props) {
    const [repos, setRepos] = useState(false);

    useEffect(() => {
        fetch("https://api.github.com/users/kressnick25/repos?sort=pushed")
            .then((res) => {
                if (res.ok) return res.json();
                throw new Error("failed to fetch");
            })
            .then(res => {
                let filteredRepos = res.filter(repo => !repo.fork && !repo.archived); // no forked repos
                let slicedFilteredRepos = filteredRepos.slice(0, 8); // limit to top 8
                setRepos(slicedFilteredRepos);
            })
            .catch(err => console.log(err.message));
    }, []);

    return (
        <div className={'WorkingOn'}>
            <h2>What I've been working on recently on Github</h2>
            <hr/>
            <div className={'reposList'}>
                {repos ?
                    repos.map(repo =>
                        <Repository
                            name={repo.name}
                            description={repo.description}
                            pushed_at={calcDays(repo.pushed_at)}
                            html_url={repo.html_url}
                        />
                    )
                :
                <p>Loading</p>}
            </div>
        </div>
    )
}

const Repository = (props) => {
    let pushedAt = `updated ${props.pushed_at} days ago`;
    if (props.pushed_at === 1) {
        pushedAt = "updated a day ago"
    }
    else if (props.pushed_at > 364) {
        pushedAt = "updated a long time ago"
    }
    
    return (
        <a href={props.html_url}>
            <div className={'repository'}>
                <h3>{props.name}</h3>
                <p>{truncate(props.description, 150)}</p>
                <p className={'updated'}><small>{pushedAt}</small></p>
            </div>
        </a>

    )
};

// returns days between now and date supplied
function calcDays(pushedAt) {
    const now = new Date(Date.now());
    const pushTime = new Date(pushedAt);
    let Difference_In_Time = now.getTime() - pushTime.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Math.ceil(Difference_In_Days);
}

export default WorkingOn;