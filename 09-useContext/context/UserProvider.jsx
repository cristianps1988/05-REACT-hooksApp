import { useState } from 'react'
import { UserContext } from './UserContext'

// const user = {
//     id: 12345,
//     name: "Cristian",
//     email: "cristian@correo.com"
// }

export const UserProvider = ({ children }) => {

    const [user, setuser] = useState()

    return (
        <UserContext.Provider value={{ user, setuser }}>
            {children}
        </UserContext.Provider>
    )
}
