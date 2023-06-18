import { useEffect } from "react";

const Message = () => {

    useEffect(() => {
        console.log('Objeto montado')
        return () => {
            console.log('Objeto desmontado')
        }
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
        </>
    )
}

export default Message
