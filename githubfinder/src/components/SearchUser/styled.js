import styled from 'styled-components'

export const InputsContainer = styled.article`
    min-width: 80%;
    padding: 20px;
`
export const FormContainer = styled.form`
    display: flex;
    align-items: center;
    padding: 20px;

    @media (max-width: 450px) {
        display: grid;
    }
`
export const ButtonSearch = styled.div`
    display: flex;
    align-items: center;
    padding-left: 20px;

    @media (max-width: 450px) {
        padding-left: 0;
    }
`
