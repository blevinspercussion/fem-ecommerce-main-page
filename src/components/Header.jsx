import './components.css';
import { useState } from 'react';
import HoverCart from './HoverCart';
import HamburgerMenu from './HamburgerMenu';
import logo from './img/logo.svg'
import shoppingCart from './img/icon-cart.svg';
import profilePic from './img/image-avatar.png';

import hamburger from './img/icon-menu.svg'

function Header ({ totalInCart, resetCart, toggleHamburgerMenu }) {

    const [isHovering, setIsHovering] = useState(false);

    const handleCartMouseOver = () => {
        setIsHovering(true);
    };

    const handleCartMouseExit = () => {
        setIsHovering(false);
    };

    const handleHamburgerClick = () => {
        toggleHamburgerMenu();
    };

    return (
        <div id='header'>
            <ul className='main-nav'>
                <li id='hamburger-icon'><img src={hamburger} onClick={handleHamburgerClick} /></li>
                <li id='logo'><img src={logo}></img></li>
                <li className='desktop-nav-item'><a href='#'>Collections</a></li>
                <li className='desktop-nav-item'><a href='#'>Men</a></li>
                <li className='desktop-nav-item'><a href='#'>Women</a></li>
                <li className='desktop-nav-item'><a href='#'>About</a></li>
                <li className='desktop-nav-item'><a href='#'>Contact</a></li>
                <li className='push'>
                    <div className='cart-div'>
                        <img className='shopping-cart-icon' src={shoppingCart} onMouseOver={handleCartMouseOver}></img>
                    {(() => {
                        if (totalInCart > 0) {
                            return <p className='floating-total'>{totalInCart}</p>
                        }
                    })()}
                </div>
                </li>
                {isHovering && (
                <div className='hover-cart-div'>
                    <HoverCart totalInCart={totalInCart} handleCartMouseExit={handleCartMouseExit} resetCart={resetCart} />
                </div>
                )}
                <li><img className='profile-pic' src={profilePic}></img></li>
            </ul>
        </div>
    )
}

export default Header;