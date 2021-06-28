import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import { secondaryColor } from '../../constants/colors'

export const RepoContainer = styled(Paper)`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    margin: 20px;
    padding: 0 10px 0 10px;
    
    a:hover {
        cursor: pointer;
        color: ${secondaryColor};
    }

    @media (max-width: 450px) {
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
    }
`
export const ReposInfos = styled.article`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`
export const SpecificInfo = styled.div`
    display: flex;
`
export const IconInfos = styled.div`
    margin-right: 10px;
    align-self: center;
`
export const LinkRepo = styled.a`
    font-size: 1.2rem;
`
export const ErrorFinder = styled.div`
    display: flex;
    margin: 0 20px;
    width: 80%;
    justify-content: center;
    align-items: center;
`
