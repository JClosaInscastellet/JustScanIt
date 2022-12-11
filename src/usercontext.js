import React, { useState } from 'react';

const UserContext = React.createContext();

export function UserProvider({children}) {
    const userData = {User : "Default", Pass : "Default"};    
    const setUserData = (name,passwd) => {
        userData.User = name;
        userData.Pass = passwd;
        console.log("Setting user data");
    }
    return (
        <UserContext.Provider value={{userData,setUserData}}>
            {children}
        </UserContext.Provider>
    );
} 

export default UserContext;