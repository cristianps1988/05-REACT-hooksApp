import { useForm } from "../hooks/useForm"


const SimpleFormWithCustomHook = () => {

    const { formState, onInputChange, username, email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    })

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
            <input
                type="password"
                className="form-control mt-2"
                name="password"
                value={password}
                placeholder="Tu contraseña"
                onChange={onInputChange}
            />
            <button
                className="btn btn-primary mt-2"
                onClick={onResetForm}
            >Borrar Campos</button>
        </>
    )
}

export default SimpleFormWithCustomHook
