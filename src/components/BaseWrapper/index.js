import React from 'react'
import {withRouter} from 'react-router'
import Header from './Header'
import Footer from './Footer'
const BaseWrapper = ({children, history}) => {
    const {location:{pathname}} = history
    const handleScrollToTop = () => {
        window.scrollTo({top: 0,  behavior: 'smooth' });
    }
    return(
        <div id="page-container">
            <header id="header"><Header/></header>
            <main>{children}</main>
            {pathname === '/' && (
                <div className="scroll-top ">
                    <span className="right" onClick={()=>handleScrollToTop()}>&and;</span>
                </div>
            )}
            <footer className="footer"><Footer/></footer>
        </div>
    )
}

export default withRouter(BaseWrapper)