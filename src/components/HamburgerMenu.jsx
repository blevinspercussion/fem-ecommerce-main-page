import './components.css';
import closeIcon from './img/icon-close.svg';


function HamburgerMenu ({ toggleHamburgerMenu }) {
    return (
        <div id='hamburger-menu'>
            <ul>
                <li><img id='hamburger-menu-close' src={closeIcon} onClick={toggleHamburgerMenu} alt='mobile menu icon' /></li>
                <li><a>Collections</a></li>
                <li><a>Men</a></li>
                <li><a>Women</a></li>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
            </ul>
        </div>
    )
}


export default HamburgerMenu;