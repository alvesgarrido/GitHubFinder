import React, { useContext } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import SearchUser from '../../components/SearchUser/SearchUser'
import UserInfosCard from '../../components/UserInfosCard/UserInfosCard'
import LogoGitFinder from '../../assets/github-finder-prim-color-icon.png'
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
                    <img src={LogoGitFinder} />
                    <h2>Comece pesquisando por um usuário ou repositório</h2>
                </MessageHome>
            }
        </HomePageMain>
    )
}

