import React from 'react';
import './index.scss';

const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div class="logo">
                    <p>Van Ribeiro &copy; 2020 </p>
                </div>
                <div className="link-list">
                    <a href="/about-us.html">Sobre Nós</a>
                    <a href="/faq.html">F.A.Q</a>
                    <a href="/contact-us.html">Contato</a>
                </div>
            </div>
        </footer>
    )
}


export default Footer;