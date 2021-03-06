import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src={logo} alt="Ema John" />
            </div>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/inventory">Manage inventory</a>
            </nav>
        </div>
    );
};

export default Header;