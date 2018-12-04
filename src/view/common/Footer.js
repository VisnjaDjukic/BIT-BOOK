import React from 'react';
import './Footer.css'

const Footer = () => {
    return (

        <footer className="page-footer orange">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright !BAD
                </div>
            </div>
        </footer>
    )
}

export { Footer }