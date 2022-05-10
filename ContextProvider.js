import React, { createContext, useState } from 'react'
export const Context = createContext()
const ContextProvider = (props) => {
    const [varUserName, setVaruserName] = useState(null);
    const [varUserID, setVaruserID] = useState(null);

    const Url = "http://localhost:3001"
    return (
         <Context.Provider 
            value={{
                varUserName,
                varUserID,
                Url
             }}>
               {props.children}
         </Context.Provider>
    )
}
export default Context