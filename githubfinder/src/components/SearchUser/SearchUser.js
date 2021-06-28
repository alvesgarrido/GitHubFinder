import React, { useContext  } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import { InputsContainer, FormContainer, ButtonSearch } from './styled'


export default function SearchUser() {

    const { form, onChange, cleanFields, getUserData } = useContext(GlobalStateContext)

    const onFinderUserOrRepo = (event) => {
        event.preventDefault()
        getUserData()
        cleanFields()
    }

    return (
        <InputsContainer>
            <Paper elevation={3}>
                <FormContainer onSubmit={onFinderUserOrRepo}>
                    <TextField
                        label="Usuário ou repositório"
                        name={"searchedUser"}
                        value={form.searchedUser}
                        onChange={onChange}
                        required
                        variant="outlined"
                        fullWidth
                        margin="dense"
                    />
                    <ButtonSearch>
                        <Button 
                            type="submit" 
                            variant="contained" 
                            color="secondary" 
                            fullWidth
                        >
                            Buscar
                        </Button>
                    </ButtonSearch>
                </FormContainer>
            </Paper>
        </InputsContainer>

    )
}