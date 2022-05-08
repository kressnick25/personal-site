import React from 'react'

import { truncate } from 'util/text';

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
}

export {
    Repository
}