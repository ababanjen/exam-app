import React from 'react'
import Header from './Header'
import Footer from './Footer'
const BaseWrapper = ({children}) => {
    const handleScrollToTop = () => {
        window.scrollTo({top: 0});
    }
    return(
        <div id="page-container">
            <header id="header"><Header/></header>
            <main>{children}</main>
            <div className="scroll-top ">
                <span className="right" onClick={()=>handleScrollToTop()}>&and;</span>
            </div>
            <footer className="footer"><Footer/></footer>
        </div>
    )
}

export default BaseWrapper