import React from 'react'
import LogoGitFinder from '../../assets/github-finder-prim-color-icon.png'
import { ErrorPageMain, MessageError } from './styled'

export default function ErrorPage() {
    return (
        <ErrorPageMain>
            <MessageError>
                <img src={LogoGitFinder} />
                <h1>Ops, não encontramos esta página.</h1>
                <h4>Navegue para outra página.</h4>
            </MessageError>
        </ErrorPageMain>
        
    )
}