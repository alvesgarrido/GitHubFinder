import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import { goToHome } from '../../routes/coordinator'

export default function Header() {
    const history = useHistory()
    const {setUser} = useContext(GlobalStateContext)
  return (
      <AppBar position="static">
        <Toolbar>
            <Button onClick={() => goToHome(history, setUser)}>GitHub Finder</Button>
        </Toolbar>
      </AppBar>
  );
}