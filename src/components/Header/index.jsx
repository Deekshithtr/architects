import React from 'react';
import './header.css';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
    return (
        <div className="header">
                <div className="header__left-contents">
                    <div className="header__home-icon"></div>
                    <p>Architects</p>
                </div>
                <div className="header__right-contents" id="box">
                    <p>Home</p>
                    <p>Collection</p>
                    <p>About</p>
                    <p>Contact</p>
                    <p><MenuIcon id="menu"/></p>
                </div>
        </div>
    )
}

export default Header;