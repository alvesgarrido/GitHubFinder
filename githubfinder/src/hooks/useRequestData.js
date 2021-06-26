import { useState } from 'react'
import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import { gitHubKeys } from '../constants/gitHubKeys'

const useRequestData = (initialState, form, header) => {

    const [data, setData] = useState(initialState)

    const {clientId, clientSecret} = gitHubKeys

    const getData = () => {
        axios
            .get(`${BASE_URL}/${form.searchedUser}${header}?client_id=${clientId}&client_secret=${clientSecret}`)
            .then((res) => { setData(res.data) })
            .catch((err) => { alert(err.response.data.message) })
    }

    return {data, getData}
}
export default useRequestData