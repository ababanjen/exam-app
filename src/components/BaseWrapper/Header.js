import React from 'react'
import ImageWrapper from '../ImageWrapper'
import { withRouter } from 'react-router'

const Header = ({history:{push}}) => {
    return (
        <ImageWrapper 
            path={'/logo.png'} 
            title={'Logo'} 
            placeHolder="Logo"
            isHeaderImg={true}
            className="logo center"
            onClick={()=>{push('/')}}
        />
    )
}

export default withRouter(Header)