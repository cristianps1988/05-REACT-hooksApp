import React, { useState } from 'react'
import { useCounter } from '../hooks/useCounter'
import Small from './Small'

const Memorize = () => {
    const { counter, increment } = useCounter()
    const [estado, setEstado] = useState(true)
    return (
        <>
            <h1>Counter: <Small value={counter}></Small> </h1>
            <hr />
            <button
                className='btn btn-primary'
                onClick={() => increment()}
            >Aumentar</button>
            <button
                onClick={() => setEstado(!estado)}
                className='btn btn-outline-primary'
            >Show/hide {JSON.stringify(estado)}</button>
        </>
    )
}

export default Memorize
