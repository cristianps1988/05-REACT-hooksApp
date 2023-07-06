import React from 'react'

const Small = React.memo(({ value }) => {
    console.log('Dibujando')
    return (
        <span>{value}</span>
    )
})

export default Small
