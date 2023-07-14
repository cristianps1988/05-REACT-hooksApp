import { useContext } from "react"
import { UserContext } from "./context/UserContext"

export const LoginPage = () => {
    const { user, setuser } = useContext(UserContext)
    return (
        <>
            <h1>LoginPage</h1>
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button
                className="btn btn-primary"
                onClick={() => {
                    setuser({
                        id: 12345,
                        name: "Cristian",
                        email: "cristian@correo.com"
                    })
                }}
            >
                Cargar user
            </button>
        </>
    )
}
