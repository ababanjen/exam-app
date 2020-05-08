import React from 'react'
import {Media} from 'react-md';

const ImageWrapper = ({path, title, placeHolder, onClick, isHeaderImg, className, customStyle}) => {
    const size = isHeaderImg? '800x200' : '200x200'
    const deafault = `https://place-hold.it/${size}?text=${placeHolder}&fontsize=12`
    const imgSrc = <img src={path?path: deafault} alt={title &&(title)} onClick={onClick} className={className} style={customStyle}/>
    return(
        !isHeaderImg ? 
        <Media aspectRatio="4-3">
            {imgSrc}
        </Media>: imgSrc
    )
}
export default ImageWrapper