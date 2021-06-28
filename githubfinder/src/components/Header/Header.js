import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { goToHome } from '../../routes/coordinator'
import IconButton from '@material-ui/core/IconButton'
import logoHeader from '../../assets/github-finder-icon.png'
import { LogoHeader } from './styled'

export default function Header() {
    const history = useHistory()
    const {setUser} = useContext(GlobalStateContext)
  return (
      <AppBar position="static">
        <Toolbar>
            <IconButton onClick={() => goToHome(history, setUser)}><LogoHeader src={logoHeader}/></IconButton>
            <h3>GitHub Finder</h3>
        </Toolbar>
      </AppBar>
  );
}