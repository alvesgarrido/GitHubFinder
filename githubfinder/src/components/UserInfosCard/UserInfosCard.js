import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import { goToUserDetails } from '../../routes/coordinator'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import { ProfileContainer, ProfileContent, AvatarImg, NameUser, LoginNameUser } from './styled'


export default function UserInfosCard() {
    const { userData } = useContext(GlobalStateContext)
    const history = useHistory()
    return (
        <section>
            {userData && userData.id && (
                    history.location.pathname === "/" ? (
                        <ProfileContainer>
                            <Paper variant="outlined">
                                <ProfileContent>
                                    <AvatarImg src={userData.avatar_url} alt="Foto Perfil" />
                                    <NameUser>{userData.name}</NameUser>
                                    <LoginNameUser>{userData.login}</LoginNameUser>
                                    <Button 
                                        onClick={() => goToUserDetails(history, userData.login)}
                                        variant="contained"
                                        color="secondary"
                                        fullWidth
                                    >
                                        Detalhes do usuário
                                    </Button>
                                </ProfileContent>
                            </Paper>
                        </ProfileContainer>

                    ) : (
                        <ProfileContainer>
                            <Paper variant="outlined">
                                <ProfileContent>
                                    <AvatarImg src={userData.avatar_url} alt="Foto Perfil" />
                                    <NameUser>{userData.name}</NameUser>
                                    <LoginNameUser>{userData.login}</LoginNameUser>
                                    <Button 
                                        onClick={() => window.open(userData.html_url)}
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                    >
                                        Visitar GitHub
                                    </Button>
                                </ProfileContent>
                            </Paper>
                        </ProfileContainer>
                    )
                )
            }
        </section>
    )
}