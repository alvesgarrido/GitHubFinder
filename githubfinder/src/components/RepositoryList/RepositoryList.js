import React from 'react'
import Loading from '../Loading/Loading'
import DeviceHubRoundedIcon from '@material-ui/icons/DeviceHubRounded'
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded'
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded'
import SentimentDissatisfiedRoundedIcon from '@material-ui/icons/SentimentDissatisfiedRounded'
import { RepoContainer, ReposInfos, SpecificInfo, IconInfos, LinkRepo, ErrorFinder } from './styled'


export default function RepositoryList(props) {
    const repoRender = props.repo
    const quantityRepo = props.lengthRepo

    const listRepo = repoRender && repoRender.map((repository) => {
        return (
            <RepoContainer variant="outlined" key={repository.name}>
                <LinkRepo onClick={() => window.open(repository.html_url)}>{repository.name}</LinkRepo>
                <ReposInfos>
                    <SpecificInfo>
                        <IconInfos><DeviceHubRoundedIcon /></IconInfos>
                        <p><strong>Forks: </strong>{repository.forks}</p>
                    </SpecificInfo>
                    <SpecificInfo>
                        <IconInfos><StarBorderRoundedIcon /></IconInfos>
                        <p><strong>Stars: </strong>{repository.stargazers_count}</p>
                    </SpecificInfo>
                    <SpecificInfo>
                        <IconInfos><VisibilityRoundedIcon /></IconInfos>
                        <p><strong>Watch: </strong>{repository.watchers}</p>
                    </SpecificInfo>
                </ReposInfos>
            </RepoContainer>
        )
    })

    if (quantityRepo === undefined) {
        return <Loading />
    } else if (quantityRepo > 0) {
        return <div>{listRepo}</div>
    } else if (quantityRepo === 0) {
        return (
            <ErrorFinder>
                <SentimentDissatisfiedRoundedIcon fontSize="large" />
                <h3>O usuário ainda não favoritou nenhum repositório</h3>
            </ErrorFinder>
        )
    }
}