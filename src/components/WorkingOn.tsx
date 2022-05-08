import React, {useEffect, useState} from 'react';
import { truncate } from '../util/text';

interface GithubRepo {
    id: string;
    archived: boolean;
    description: string;
    fork: boolean;
    html_url: string;
    name: string;
    pushed_at: string;
}

export function WorkingOn() {
    const [repos, setRepos] = useState([] as Array<GithubRepo>);

    useEffect(() => {
        fetch("https://api.github.com/users/kressnick25/repos?sort=pushed")
            .then((res) => {
                if (res.ok) return res.json();
                throw new Error("failed to fetch");
            })
            .then(res => {
                let filteredRepos = res.filter((repo: GithubRepo) => !repo.fork && !repo.archived); // no forked repos
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
                {repos.length !== 0 ?
                    repos.map((repo: GithubRepo) =>
                        <Repository
                            key={repo.id}
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

interface RepositoryProps {
    pushed_at: number,
    html_url: string,
    name: string,
    description: string,
}

const Repository = (props: RepositoryProps) => {
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
function calcDays(pushedAt: string) {
    const now = new Date(Date.now());
    const pushTime = new Date(pushedAt);
    let Difference_In_Time = now.getTime() - pushTime.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Math.ceil(Difference_In_Days);
}

export default WorkingOn;