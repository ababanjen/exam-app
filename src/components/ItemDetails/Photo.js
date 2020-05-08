import React from 'react'
import ImageWrapper from '../ImageWrapper'

const Photo = ({item:{img,title}}) => {
    return(
        <ImageWrapper path={img} title={title} placeHolder="No Item Image"/>
    )
}
export default Photo