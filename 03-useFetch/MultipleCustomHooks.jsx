import useFetch from "../hooks/useFetch"
import { useCounter } from "../hooks/useCounter"

const MultipleCustomHooks = () => {
    const { counter, increment } = useCounter(1)

    const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    const { quote, author } = !!data && data[0]

    return (
        <>
            <h1>Breaking bad Quotes</h1>
            <hr />
            {
                isLoading ? (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : (<blockquote className="blockquote text-end">
                    <p className="mb-3">{quote}</p>
                    <footer className="blockquote-footer">{author}</footer>
                </blockquote>)
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
