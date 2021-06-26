import React, {useContext} from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'

export default function SearchUser() {

    const {form, onChange, cleanFields, getData} = useContext(GlobalStateContext)

    const onFinderUserOrRepo = (event) => {
        event.preventDefault()
        getData()
        cleanFields()
    }

    return (
        <div>
            <form onSubmit={onFinderUserOrRepo}>
                <input
                    placeholder="Nome de usuário ou repositório"
                    name={"searchedUser"}
                    value={form.searchedUser}
                    onChange={onChange}
                    required
                    pattern={"^.{3,}"}
                />
                <button>Buscar</button>
            </form>


        </div>
    )
}