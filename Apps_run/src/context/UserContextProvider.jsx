import React from "react";
import UserContext from "./UserContext"

const UserContextProvider = ({children}) =>{
    // yha hum api bhi direct fecth krte for direct data access
    const [user,setUser] =React.useState(null)
    return(
        // here i am giving a acces of user and setuser variable in other component
        <UserContext.Provider value={{user,setUser}}>   
        {children}
        </UserContext.Provider>
        
    )
}

export default UserContextProvider;