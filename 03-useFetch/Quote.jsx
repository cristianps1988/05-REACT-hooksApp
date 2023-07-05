import { useLayoutEffect, useRef, useState } from "react"

const Quote = ({ author, quote }) => {

    const pRef = useRef()
    const [boxSize, setBoxsize] = useState({ width: 0, height: 0 })

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect()
        setBoxsize({ width, height })

    }, [quote])
    return (
        <>
            <blockquote
                style={{ display: 'flex' }}
                className="blockquote text-end">
                <p
                    className="mb-3"
                    ref={pRef}
                >{quote}</p>
                <footer className="blockquote-footer">{author}</footer>
            </blockquote>
            <code>{JSON.stringify(boxSize)}</code>
        </>

    )
}

export default Quote
