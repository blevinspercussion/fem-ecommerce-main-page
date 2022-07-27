import './components.css';
import leftArrow from './img/icon-previous.svg';
import rightArrow from './img/icon-next.svg';
import closeIcon from './img/icon-close.svg';
import ProductDisplay from './ProductDisplay';

import { useEffect } from 'react';

function LightBox ({ toggleLightBox, currentPic, setCurrentPic, thumbnails, handleSelected, handleThumbnailSelect, handleLeftArrowClick, handleRightArrowClick }) {


    useEffect(() => {
        thumbnails = Array.from(
            document.getElementsByClassName('product-image-small')
        );
    });

    return (
        <div className='lightbox'>
            <ProductDisplay 
                currentPic={currentPic}
                setCurrentPic={setCurrentPic}
                thumbnails={thumbnails}
                handleSelected={handleSelected}
            />
            <img className='arrow left-arrow fake-arrow' src={leftArrow} alt='Left arrow'></img>
            <img className='arrow left-arrow' src={leftArrow} onClick={handleLeftArrowClick} alt='Left arrow'></img>
            <img className='arrow right-arrow' src={rightArrow} alt='right arrow'></img>
            <img className='arrow right-arrow fake-arrow' onClick={handleRightArrowClick} src={rightArrow} alt='Right arrow'></img>
            <img className='lightbox-close' src={closeIcon} onClick={toggleLightBox} alt='X to close lightbox' ></img>

        </div>
    )
}

export default LightBox;