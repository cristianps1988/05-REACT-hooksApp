import { useRef } from "react"

const FocusScreen = () => {

    const inputRef = useRef()

    const clickBtn = () => {
        inputRef.current.select()
    }


    return (
        <>
            <input
                ref={inputRef}
                className="form-control"
                placeholder="Escribe"
                type="text"
            />
            <button
                className="btn btn-primary mt-2"
                onClick={clickBtn}
            >Presionar</button>
        </>
    )
}

export default FocusScreen
