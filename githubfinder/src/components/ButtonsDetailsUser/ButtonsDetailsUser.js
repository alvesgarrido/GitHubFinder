import React, { useState } from 'react'
import RepositoryList from '../RepositoryList/RepositoryList'
import useRequestData from '../../hooks/useRequestData'
import { useParams } from 'react-router'
import { ButtonsContainer, ButtonsCustom } from './styled'


export default function ButtonsDetailsUser() {
    const params = useParams();
    const { data: repo, lengthDataRequest: numberOfRepo, getData: getRepo } = useRequestData([], `${params.login}/repos?`)
    const { data: starred, lengthDataRequest: numberOfStarred, getData: getStarred } = useRequestData([], `${params.login}/starred?`)
    const [buttonAction, setButtonAction] = useState({ repoButton: false, starredButton: false })
  
    const goToRepo = () => {
        getRepo()
        setButtonAction({ repoButton: buttonAction.repoButton ? !buttonAction.repoButton : true, starredButton: buttonAction.starredButton ? !buttonAction.starredButton : false })
    }

    const goToStarred = () => {
        getStarred()
        setButtonAction({ starredButton: buttonAction.starredButton ? !buttonAction.starredButton : true, repoButton: buttonAction.repoButton ? !buttonAction.repoButton : false })
    }

    return (
        <section>
            <ButtonsContainer>
                <ButtonsCustom
                    onClick={() => goToRepo()}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                >
                    Repositórios
                </ButtonsCustom>
                <ButtonsCustom
                    onClick={() => goToStarred()}
                    type="submit"
                    variant="contained"
                    color="secondary"
                    fullWidth
                >
                    Favoritos
                </ButtonsCustom>
            </ButtonsContainer>
            {buttonAction.repoButton && <RepositoryList repo={repo} lengthRepo={numberOfRepo} />}
            {buttonAction.starredButton && <RepositoryList repo={starred} lengthRepo={numberOfStarred} />}
        </section>
        
        
    )
}