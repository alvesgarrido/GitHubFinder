import React, { useContext } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import SearchUser from '../../components/SearchUser/SearchUser'
import UserInfosCard from '../../components/UserInfosCard/UserInfosCard'
import LogoGitFinder from '../../assets/github-finder-prim-color-icon.png'
import Fab from '@material-ui/core/Fab'
import { LinkedIn } from '@material-ui/icons'
import { HomePageMain, MessageHome } from './styled'


export default function HomePage() {
    const { userData } = useContext(GlobalStateContext)

    return (
        <HomePageMain>
            <SearchUser />
            {userData && userData.id ?
                <UserInfosCard />
                :
                <MessageHome>
                    <img src={LogoGitFinder} alt="Logo Cinza"/>
                    <h2>Comece pesquisando por um usuário ou repositório</h2>
                </MessageHome>
            }
            <Fab onClick={() => window.open("https://www.linkedin.com/in/engmatheusgarrido/")} color="secondary" aria-label="add">
                <LinkedIn />
            </Fab>
        </HomePageMain>
    )
}

