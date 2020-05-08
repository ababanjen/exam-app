import React from 'react'

const Footer = () => {
    const handleScrollToTop = () => {
        window.scrollTo({top: 0});
    }
    return (
        <div className="logo center">
            <span>Copy right &copy; {new Date().getFullYear()}</span>
            {/* <a onClick={()=>handleScrollToTop()}>Back to top</a> */}
        </div>
    )
}

export default Footer