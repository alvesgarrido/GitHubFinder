import styled from 'styled-components'

export const MainContainerDetailPage = styled.main`
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: auto 1fr;
`
export const ProfileContainer = styled.div`
    grid-row: 1 / span 2;
`
export const DetailsContainer = styled.div`
    grid-row: 1;
`
export const ButtonsContainer = styled.div`
    grid-column: 2;
    justify-items: center;
    //justify-self: center;
`