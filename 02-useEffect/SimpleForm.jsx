import { useState } from "react"
import Message from "./Message"
import { useEffect } from "react"

const SimpleForm = () => {

    const [formState, setformState] = useState({
        username: "cristianps",
        email: "cristian@correo.com"
    })

    const { username, email } = formState

    const onInputChange = ({ target }) => {
        const { name, value } = target
        setformState({
            ...formState,
            [name]: value
        })
    }

    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                placeholder="Tu nombre"
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                name="email"
                value={email}
                placeholder="Tu correo"
                onChange={onInputChange}
            />
            {(username === 'cristianps1') && <Message />}
        </>
    )
}

export default SimpleForm
