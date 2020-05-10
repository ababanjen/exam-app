import React from 'react'
import { withRouter } from 'react-router'

const Footer = props => {
    return (
        <section>
            <div class="footer-wrapper left">
                <a onClick={()=>props.history.push('/')}>Homepage</a>
            </div>
            <div class="footer-wrapper right">Copy right &copy; {new Date().getFullYear()} | Exam</div>
        </section>
    )
}

export default withRouter(Footer)