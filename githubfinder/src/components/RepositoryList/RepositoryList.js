import React from 'react'

export default function RepositoryList(props) {
    const repoRender = props.repo

    const listRepo = repoRender && repoRender.map((repository) => {
        return (
            <div>
                <a onClick={() => window.open(repository.html_url)}>{repository.name}</a>
                <p><strong>Forks: </strong>{repository.stargazers_count}</p>
                <p><strong>Stars: </strong>{repository.watchers}</p>
                <p><strong>Watch: </strong>{repository.forks}</p>
            </div>
        )
    })

    return (
        <div>
            {listRepo}
        </div>
    )
}