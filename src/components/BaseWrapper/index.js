import React from 'react'
import Header from './Header'
import Footer from './Footer'
const BaseWrapper = ({children, pageName}) => {
    return(
        <div id="page-container">
            <div id="header">
                <Header/>
            </div>
            <div id="content-wrap">
                {children}
            </div>
            <footer id="footer"><Footer/></footer>
        </div>
    )
}

export default BaseWrapper