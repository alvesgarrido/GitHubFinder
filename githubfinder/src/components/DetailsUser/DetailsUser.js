import React, { useState, useContext, useEffect } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { useParams } from 'react-router'
import useRequestData from '../../hooks/useRequestData'
import { formatDate } from '../../services/formatDate'
import RepositoryList from '../RepositoryList/RepositoryList'

export default function DetailsUser() {

    const params = useParams();
    const {setUser} = useContext(GlobalStateContext)
    const { data, getData } = useRequestData({}, `${params.login}?`)
    const { data: repo, getData: getRepo } = useRequestData([], `${params.login}/repos?`)
    const { data: starred, getData: getStarred } = useRequestData([], `${params.login}/starred?`)
    const [buttonAction, setButtonAction] = useState({repoButton: false, starredButton: false})

    useEffect(() => {
        getData()
    }, [params])

    setUser(data)

    const goToRepo = () => {
        getRepo()
        setButtonAction({repoButton: buttonAction.repoButton ? !buttonAction.repoButton : true, starredButton: buttonAction.starredButton ? !buttonAction.starredButton : false})
    }

    const goToStarred = () => {
        getStarred()
        setButtonAction({starredButton: buttonAction.starredButton ? !buttonAction.starredButton : true, repoButton: buttonAction.repoButton ? !buttonAction.repoButton : false})
    }
    
    return (
        <div>
            <div>
                <p><strong>Usuário desde: </strong>{formatDate(data.created_at)}</p>
                <p><strong>Última atualização: </strong>{formatDate(data.updated_at)}</p>
                <p><strong>Seguidores: </strong>{data.followers}</p>
                <p><strong>Seguindo: </strong>{data.following}</p>
                <p><strong>Repositórios públicos: </strong>{data.public_repos}</p>
            </div>
            <div>
                <p><strong>Empresa: </strong>{data.company}</p>
                <p><strong>Bio: </strong>{data.bio}</p>
            </div>
            <button onClick={() => goToRepo()}>Repositórios</button>
            <button onClick={() => goToStarred()}>Favoritos</button>
            {buttonAction.repoButton && <RepositoryList repo={repo}/>}
            {buttonAction.starredButton && <RepositoryList repo={starred}/>}
        </div>
    )
}