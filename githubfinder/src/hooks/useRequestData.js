import { useState } from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { gitHubKeys } from '../constants/gitHubKeys'

const useRequestData = (initialState, url) => {

    const [data, setData] = useState(initialState)
    const [lengthDataRequest, setLengthDataRequest] = useState(undefined)
    const { clientId, clientSecret } = gitHubKeys
    
    const getData = () => {
        axios
            .get(`${BASE_URL}/${url}client_id=${clientId}&client_secret=${clientSecret}`)
            .then((res) => { 
                setData(res.data)
                setLengthDataRequest(res.data.length) 
            })
            .catch((err) => { alert("Usuário ou repositório não encontrado") })
    }

    return { data, lengthDataRequest, setData, getData }
}
export default useRequestData