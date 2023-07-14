import { UserContext } from './UserContext'

const initialValue = {
    id: 12345,
    nombre: "Cristian",
    correo: "cristian@correo.com"
}

export const UserProvider = ({ children }) => {
    return (
        <UserContext.Provider value={initialValue}>
            {children}
        </UserContext.Provider>
    )
}
