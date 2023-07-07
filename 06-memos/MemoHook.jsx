import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

const heavyStuff = (iterationNumber = 100) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahí vamos...')
    }
    return `${iterationNumber} iteraciones realizadas`
}



const MemoHook = () => {
    const { counter, increment } = useCounter(1000)
    const [estado, setEstado] = useState(true)
    const memoValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{counter}</small> </h1>
            <hr />
            <h3>{memoValue}</h3>
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

export default MemoHook
