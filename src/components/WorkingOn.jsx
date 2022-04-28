import React, {useEffect, useState} from 'react';
import { truncate } from '../util/text';

export function WorkingOn(props) {
    const [repos, setRepos] = useState(false);

    useEffect(() => {
        fetch("https://api.github.com/users/kressnick25/repos?sort=pushed&per_page=8")
            .then((res) => {
                if (res.ok) return res.json();
                throw new Error("failed to fetch");
            })
            .then(res => setRepos(res))
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
    return (
        <a href={props.html_url}>
            <div className={'repository'}>
                <h3>{props.name}</h3>
                <p>{truncate(props.description, 150)}</p>
                <p className={'updated'}><small>pushed {props.pushed_at} days ago</small></p>
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
