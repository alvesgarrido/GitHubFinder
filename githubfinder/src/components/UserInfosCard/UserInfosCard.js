import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { goToUserDetails } from '../../routes/coordinator'

export default function UserInfosCard() {
    const { userData } = useContext(GlobalStateContext)
    const history = useHistory()    
    return (
        <div>
            {userData && userData.id && (
                history.location.pathname === "/" ? (
                    <div>
                        <img src={userData.avatar_url} alt="Foto Perfil" />
                        <h2>{userData.name}</h2>
                        <p>{userData.login}</p>
                        <button onClick={() => goToUserDetails(history, userData.login)}>Detalhes do usuário</button>
                    </div>
                ) : (
                    <div>
                        <img src={userData.avatar_url} alt="Foto Perfil" />
                        <h2>{userData.name}</h2>
                        <p>{userData.login}</p>
                        <button onClick={() => window.open(userData.html_url)}>Visitar GitHub</button>
                    </div>
                )
            )}
        </div>
    )
}