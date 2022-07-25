import './components.css';
import leftArrow from './img/icon-previous.svg';
import rightArrow from './img/icon-next.svg';
import closeIcon from './img/icon-close.svg';
import ProductDisplay from './ProductDisplay';

function LightBox ({ toggleDarkOverlay }) {
    return (
        <div className='lightbox'>
            <ProductDisplay />
            <img className='arrow left-arrow fake-arrow' src={leftArrow}></img>
            <img className='arrow left-arrow' src={leftArrow}></img>
            <img className='arrow right-arrow' src={rightArrow}></img>
            <img className='arrow right-arrow fake-arrow' src={rightArrow}></img>
            <img className='lightbox-close' src={closeIcon} onClick={toggleDarkOverlay} ></img>

        </div>
    )
}

export default LightBox;