import React, {useEffect} from 'react'
import useForm from '../hooks/useForm';
import useRequestData from '../hooks/useRequestData';
import { GlobalStateContext } from "./GlobalStateContext";

export const GlobalState = (props) => {

    const { form, onChange, cleanFields } = useForm({
        searchedUser: ""
    })

    const { data, getData } = useRequestData({}, form, "")

    return <GlobalStateContext.Provider value={{form, onChange, cleanFields, data, getData }}>
        {props.children}
    </GlobalStateContext.Provider>
}