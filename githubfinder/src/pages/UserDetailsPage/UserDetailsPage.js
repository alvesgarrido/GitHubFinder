import React from 'react'
import UserInfosCard from '../../components/UserInfosCard/UserInfosCard'
import DetailsUser from '../../components/DetailsUser/DetailsUser'
import ButtonsDetailsUser from '../../components/ButtonsDetailsUser/ButtonsDetailsUser'
import { MainContainerDetailPage, ProfileContainer, DetailsContainer, ButtonsContainer } from './styled'


export default function UserDetailsPage() {
    return (
        <MainContainerDetailPage>
            <ProfileContainer>
                <UserInfosCard />
            </ProfileContainer>
            <DetailsContainer>
               <DetailsUser /> 
            </DetailsContainer>
            <ButtonsContainer>
                <ButtonsDetailsUser />
            </ButtonsContainer>
        </MainContainerDetailPage>
    )
}