import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

export default function Profile() {
    //  this const variable is a same for all component to take a context api
    const {user} =useContext(UserContext)

    if(!user) return <div >please login</div>
       return <div >welcome {user.username}</div> 
}
