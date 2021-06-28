import styled from 'styled-components'
import { primaryColor } from '../../constants/colors'

export const HomePageMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
`
export const MessageHome = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 60vh;
    color: ${primaryColor};

    @media (max-width: 700px) {
      font-size: 0.8rem;
      width: 80%;
      height: 50vh;
    }
`