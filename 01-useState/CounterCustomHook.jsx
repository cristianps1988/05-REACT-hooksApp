import { useCounter } from "../hooks/useCounter"

const CounterCustomHook = () => {

    const { counter, increment, decrement, reset } = useCounter(0)


    return (
        <>
            <h1>Counter with cursom hook: {counter}</h1>
            <hr />
            <button
                className="btn btn-primary"
                onClick={() => decrement(5)}
            >-1</button>
            <button
                className="btn btn-primary"
                onClick={reset}
            >Reset</button>
            <button
                className="btn btn-primary"
                onClick={() => increment(3)}
            >+1</button>
        </>
    )
}

export default CounterCustomHook
