import styled from 'styled-components'
import Button from '@material-ui/core/Button'

export const ButtonsContainer = styled.article`
    display: flex;
    max-width: 100%;
    justify-content: center;

    @media (max-width: 450px) {
        display: grid;
    }
`
export const ButtonsCustom = styled(Button)`
    margin: 10px 20px 10px 20px;

    @media (max-width: 450px) {
        display: flex;
        margin-bottom: 20;
    }
`