import './components.css';
import leftArrow from './img/icon-previous.svg';
import rightArrow from './img/icon-next.svg';
import closeIcon from './img/icon-close.svg';
import ProductDisplay from './ProductDisplay';

import productImage1 from './img/image-product-1.jpg';
import productImage2 from './img/image-product-2.jpg';
import productImage3 from './img/image-product-3.jpg';
import productImage4 from './img/image-product-4.jpg';
import productImage1Thumbnail from './img/image-product-1-thumbnail.jpg';
import productImage2Thumbnail from './img/image-product-2-thumbnail.jpg';
import productImage3Thumbnail from './img/image-product-3-thumbnail.jpg';
import productImage4Thumbnail from './img/image-product-4-thumbnail.jpg';

import { useEffect } from 'react';

function LightBox ({ toggleLightBox, currentPic, setCurrentPic, thumbnails, handleSelected }) {


    useEffect(() => {
        thumbnails = Array.from(
            document.getElementsByClassName('product-image-small')
        );
    });

    const handleThumbnailSelect = (index) => {
        console.log(thumbnails[index]);
        
        for (let thumbnail in thumbnails) {
            let newIndex = index+1;
            thumbnails[thumbnail].classList.remove('selected-image');
            if (thumbnails[thumbnail].classList.contains(`product-image${newIndex}`)) {
                thumbnails[thumbnail].classList.add('selected-image');
            }
        }

    }

    const handleLeftArrowClick = () => {
        switch (currentPic) {
            case productImage1:
                setCurrentPic(productImage4);
                handleThumbnailSelect(3);
                break;

            case productImage2:
                setCurrentPic(productImage1);
                handleThumbnailSelect(0);
                break;

            case productImage3:
                setCurrentPic(productImage2);
                handleThumbnailSelect(1);
                break;

            case productImage4:
                setCurrentPic(productImage3);
                handleThumbnailSelect(2);
                break;
        }


    }

    const handleRightArrowClick = () => {
        handleThumbnailSelect();
        switch (currentPic) {
            case productImage1:
                setCurrentPic(productImage2);
                handleThumbnailSelect(1);
                break;

            case productImage2:
                setCurrentPic(productImage3);
                handleThumbnailSelect(2);
                break;

            case productImage3:
                setCurrentPic(productImage4);
                handleThumbnailSelect(3);
                break;

            case productImage4:
                setCurrentPic(productImage1);
                handleThumbnailSelect(0);
                break;
        }
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
            <img className='arrow left-arrow' src={leftArrow} onClick={handleLeftArrowClick}></img>
            <img className='arrow right-arrow' src={rightArrow} ></img>
            <img className='arrow right-arrow fake-arrow' onClick={handleRightArrowClick} src={rightArrow}></img>
            <img className='lightbox-close' src={closeIcon} onClick={toggleLightBox} ></img>

        </div>
    )
}

export default LightBox;