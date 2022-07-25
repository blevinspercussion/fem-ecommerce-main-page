import './components.css';
import leftArrow from './img/icon-previous.svg';
import rightArrow from './img/icon-next.svg';
import closeIcon from './img/icon-close.svg';
import ProductDisplay from './ProductDisplay';

import { useEffect } from 'react';

function LightBox ({ toggleDarkOverlay, currentPic, setCurrentPic, thumbnails, handleSelected }) {


    useEffect(() => {
        thumbnails = Array.from(
            document.getElementsByClassName('product-image-small')
        );
    })

    const handleLeftArrowClick = () => {

    }

    const handleRightArrowClick = () => {
        console.log(currentPic);
    }

    return (
        <div className='lightbox'>
            <ProductDisplay 
                currentPic={currentPic}
                setCurrentPic={setCurrentPic}
                thumbnails={thumbnails}
                handleSelected={handleSelected}
            />
            <img className='arrow left-arrow fake-arrow' src={leftArrow}></img>
            <img className='arrow left-arrow' src={leftArrow}></img>
            <img className='arrow right-arrow' src={rightArrow} ></img>
            <img className='arrow right-arrow fake-arrow' onClick={handleRightArrowClick} src={rightArrow}></img>
            <img className='lightbox-close' src={closeIcon} onClick={toggleDarkOverlay} ></img>

        </div>
    )
}

export default LightBox;