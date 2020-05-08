import React from 'react'

const Details = ({item:{details, title}}) => {
    return(
        <>
        <h3>{title}</h3>
        <p>{details}</p>
        </>
    )
}
export default Details