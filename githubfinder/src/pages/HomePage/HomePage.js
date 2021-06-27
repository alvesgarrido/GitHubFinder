import React from 'react'
import SearchUser from '../../components/SearchUser/SearchUser' 
import UserInfosCard from '../../components/UserInfosCard/UserInfosCard'

export default function HomePage() {
    return (
        <div>
            <SearchUser />
            <UserInfosCard />
        </div>
    )
}