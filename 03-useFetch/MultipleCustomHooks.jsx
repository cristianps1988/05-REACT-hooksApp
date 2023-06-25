import useFetch from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter"
import LoadingQuote from "./LoadingQuote"
import Quote from "./Quote"

const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    const { quote, author } = !!data && data[0]

    return (
        <>
            <h1>Breaking bad Quotes</h1>
            <hr />
            {
                isLoading ? <LoadingQuote /> : <Quote quote={quote} author={author} />
            }
            <button
                className="btn btn-primary"
                onClick={() => increment()}
                disabled={isLoading}
            >Next quote</button>
        </>
    )
}

export default MultipleCustomHooks
