import React, { useCallback, useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

const CallbackHook = () => {
    const [counter, setCounter] = useState(1)

    const increment = useCallback(
        () => {
            setCounter((value) => value + 1)
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
