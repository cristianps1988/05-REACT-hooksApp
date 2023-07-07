import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

const CallbackHook = () => {
    const [counter, setCounter] = useState(0)

    const increment = useCallback(
        (value) => {
            setCounter((c) => c + value)
        }, []
    )

    // const increment = () => {
    //     setCounter(counter + 1)
    // }

    return (
        <>
            <h1>Counter: {counter}</h1>
            <hr />
            <ShowIncrement increment={increment} />
        </>
    )
}

export default CallbackHook
