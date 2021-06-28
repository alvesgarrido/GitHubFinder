import styled from 'styled-components'
import { primaryColor } from '../../constants/colors'

export const ErrorPageMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
`
export const MessageError = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 80vh;
    color: ${primaryColor};

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: 0.8rem;
        width: 90%;
        height: 80vh;
    }
`