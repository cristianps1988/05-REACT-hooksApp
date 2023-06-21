import { useEffect, useState } from "react";

const Message = () => {
    const [movimiento, setMovimiento] = useState({ x: 0, y: 0 })

    useEffect(() => {

        const onMouseMove = ({ x, y }) => {
            setMovimiento({ x, y })
        }

        window.addEventListener('mousemove', onMouseMove)

        return () => {
            window.removeEventListener('mousemove', onMouseMove)
        }
    }, []);

    return (
        <>
            <h3>Usuario ya existe</h3>
            {JSON.stringify(movimiento)}
        </>
    )
}

export default Message
