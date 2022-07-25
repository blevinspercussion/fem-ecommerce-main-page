import './components.css';
import { useState } from 'react';
import HoverCart from './HoverCart';
import logo from './img/logo.svg'
import shoppingCart from './img/icon-cart.svg';
import profilePic from './img/image-avatar.png';

function Header ({ totalInCart, resetCart, toggleDarkOverlay }) {

    const [isHovering, setIsHovering] = useState(false);

    const handleCartMouseOver = () => {
        setIsHovering(true);
    };

    const handleCartMouseExit = () => {
        setIsHovering(false);
    };

    return (
        <div id='header'>
            <ul className='main-nav'>
                <li><img src={logo}></img></li>
                <li><a href='#'>Collections</a></li>
                <li><a href='#'>Men</a></li>
                <li><a href='#'>Women</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
                <li className='push' onMouseOver={handleCartMouseOver}>
                    <div className='cart-div'>
                        <img className='shopping-cart-icon' src={shoppingCart}></img>
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