import React from 'react';
import './index.scss';

const NavBar = () => {
    return (
        <nav>
            <div className="container">
                <div class="logo">
                    <a href="/">
                        <h1>Blog</h1>
                    </a>
                </div>
                <div className="link-list">
                    <a href="/about-us.html">Sobre Nós</a>
                    <a href="/faq.html">F.A.Q</a>
                    <a href="/contact-us.html">Contato</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;