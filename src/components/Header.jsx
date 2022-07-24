import './components.css';
import logo from './img/logo.svg'
import shoppingCart from './img/icon-cart.svg';
import profilePic from './img/image-avatar.png';

function Header () {
    return (
        <div id='header'>
            <ul className='main-nav'>
                <li><img src={logo}></img></li>
                <li><a href='#'>Collections</a></li>
                <li><a href='#'>Men</a></li>
                <li><a href='#'>Women</a></li>
                <li><a href='#'>About</a></li>
                <li><a href='#'>Contact</a></li>
                <li className='push'><img src={shoppingCart}></img></li>
                <li><img className='profile-pic' src={profilePic}></img></li>
            </ul>
        </div>
    )
}

export default Header;