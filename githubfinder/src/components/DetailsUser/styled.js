import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import {primaryColor} from '../../constants/colors'

export const InfoBoxUser = styled(Paper)`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    background-color: ${primaryColor};
    margin: 20px;
`
export const GridInfosUser = styled.article`
    display: grid;
    grid-template-columns: 45px 3fr;
    align-self: center;
`
export const ParagInfo = styled.p`
    grid-column: 2;
    margin: 5px;

`
export const IconInfos = styled.div`
    grid-row: 1 / span 4;
    margin-right: 10px;
    justify-self: center;
    align-self: center;
`

   