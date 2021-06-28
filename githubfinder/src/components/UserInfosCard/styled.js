import styled from 'styled-components'

export const ProfileContainer = styled.div`
    min-width: 300px;
    max-width: 400px;
    padding: 20px;
`
export const ProfileContent = styled.div`
    display: flex;
    padding: 10px;
    flex-direction: column;
    align-items: center;
` 
export const AvatarImg = styled.img`
    min-width: 200px;
    max-width: 300px;
    border-radius: 50%;

    @media (max-width: 450px) {
        max-width: 230px;
    }
`
export const NameUser = styled.h2`
    font-size: 1.2rem;
    margin-bottom: 0;
`
export const LoginNameUser = styled.p`
    font-size: 1.2rem;
    margin-top: 0;
`
