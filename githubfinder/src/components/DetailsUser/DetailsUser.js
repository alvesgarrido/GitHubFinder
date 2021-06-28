import React, { useContext, useEffect } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { useParams } from 'react-router'
import useRequestData from '../../hooks/useRequestData'
import { formatDate } from '../../services/formatDate'
import Loading from '../Loading/Loading'
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded'
import PeopleAltRoundedIcon from '@material-ui/icons/PeopleAltRounded'
import StorageRoundedIcon from '@material-ui/icons/StorageRounded'
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded'
import SentimentSatisfiedRoundedIcon from '@material-ui/icons/SentimentSatisfiedRounded'
import { InfoBoxUser, GridInfosUser, ParagInfo, IconInfos } from './styled'


export default function DetailsUser() {

    const params = useParams();
    const { setUser } = useContext(GlobalStateContext)
    const { data, getData } = useRequestData({}, `${params.login}?`)
    
    useEffect(() => {
        getData()
    }, [params])

    setUser(data)
    
    return (
        <main>
            {data.id ?
                <section>
                    <InfoBoxUser elevation={2}>
                        <GridInfosUser>
                            <IconInfos><AccessTimeRoundedIcon fontSize="large"/></IconInfos>
                            <ParagInfo><strong>Usuário desde: </strong>{formatDate(data.created_at)}</ParagInfo>
                            <ParagInfo><strong>Última atualização: </strong>{formatDate(data.updated_at)}</ParagInfo>
                        </GridInfosUser>
                        <GridInfosUser>
                            <IconInfos><PeopleAltRoundedIcon fontSize="large"/></IconInfos>
                            <ParagInfo><strong>Seguidores: </strong>{data.followers}</ParagInfo>
                            <ParagInfo><strong>Seguindo: </strong>{data.following}</ParagInfo>
                        </GridInfosUser>
                        <GridInfosUser>
                            <IconInfos><StorageRoundedIcon fontSize="large"/></IconInfos>
                            <ParagInfo><strong>Repositórios públicos: </strong>{data.public_repos}</ParagInfo>
                        </GridInfosUser>
                    </InfoBoxUser>
                    {data.company || data.bio ?
                        <InfoBoxUser elevation={2}>
                            {data.company &&
                                <GridInfosUser>
                                    <IconInfos><BusinessRoundedIcon fontSize="large" /></IconInfos>
                                    <ParagInfo><strong>Empresa: </strong>{data.company}</ParagInfo>
                                </GridInfosUser>
                            }
                            {data.bio &&
                                <GridInfosUser>
                                    <IconInfos><SentimentSatisfiedRoundedIcon fontSize="large" /></IconInfos>
                                    <ParagInfo><strong>Bio: </strong>{data.bio}</ParagInfo>
                                </GridInfosUser>
                            }
                        </InfoBoxUser> 
                    : 
                        ""
                    }
                </section>
            :
                <Loading />
            }
        </main>

    )
}