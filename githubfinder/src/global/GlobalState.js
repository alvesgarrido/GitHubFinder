import React from 'react'
import useForm from '../hooks/useForm'
import useRequestData from '../hooks/useRequestData'
import { GlobalStateContext } from "./GlobalStateContext"

export const GlobalState = (props) => {

    const { form, onChange, cleanFields } = useForm({
        searchedUser: ""
    })

    const { data: userData, setData: setUser, getData: getUserData } = useRequestData({}, `${form.searchedUser}?`)
 
    return <GlobalStateContext.Provider value={{form, onChange, cleanFields, userData, setUser, getUserData }}>
        {props.children}
    </GlobalStateContext.Provider>
}