import './components.css';

import productImage1Thumbnail from './img/image-product-1-thumbnail.jpg';
import productImage2Thumbnail from './img/image-product-2-thumbnail.jpg';
import productImage3Thumbnail from './img/image-product-3-thumbnail.jpg';
import productImage4Thumbnail from './img/image-product-4-thumbnail.jpg';
import leftArrow from './img/icon-previous.svg';
import rightArrow from './img/icon-next.svg';




function ProductDisplay ({ toggleLightBox, currentPic, handleCurrentPic, thumbnails, handleSelected, handleLeftArrowClick, handleRightArrowClick }) {


    return (
        <div className='product-display'>
            <div className='product-display-desktop'>
                <div className='product-main-image'>
                    <img className='product-image product-image-large' src={currentPic} onClick={toggleLightBox} alt='Tan and white sneakers'></img>
                </div>
                <div className='product-sub-images'>
                    <div className='product-image-small-bg'>
                        <img className={'product-image product-image-small selected-image product-image1'} id='productImage1' src={productImage1Thumbnail} onClick={handleSelected} alt='Tan and white sneakers'></img>
                    </div>
                    <div className='product-image-small-bg'>
                        <img className={'product-image product-image-small product-image2'} id='productImage2' src={productImage2Thumbnail} onClick={handleSelected} alt='Tan and white sneakers next to a twig'></img>
                    </div>
                    <div className='product-image-small-bg'>
                        <img className={'product-image product-image-small product-image3'} id='productImage3' src={productImage3Thumbnail} onClick={handleSelected} alt='Tan and white sneaker sitting on a rock'></img>
                    </div>
                    <div className='product-image-small-bg'>
                        <img className={'product-image product-image-small product-image4'} id='productImage4' src={productImage4Thumbnail} onClick={handleSelected} alt='Tan and white sneaker sitting on a rock'></img>
                    </div>
                </div>
            </div>
            <div className='product-display-mobile'>
            <div className='product-main-image'>
                    <img className='product-image product-image-large' src={currentPic} alt='Tan and white sneakers'></img>
                    <img className='mobile-left-arrow' src={leftArrow} onClick={handleLeftArrowClick} alt='Left arrow' />
                    <img className='mobile-right-arrow' src={rightArrow} onClick={handleRightArrowClick} alt='Right arrow' />
                </div>
                <div className='product-sub-images'>
                    <div className='product-image-small-bg'>
                        <img className={'product-image product-image-small selected-image product-image1'} id='productImage1' src={productImage1Thumbnail} onClick={handleSelected} alt='Tan and white sneakers'></img>
                    </div>
                    <div className='product-image-small-bg'>
                        <img className={'product-image product-image-small product-image2'} id='productImage2' src={productImage2Thumbnail} onClick={handleSelected} alt='Tan and white sneakers next to a twig'></img>
                    </div>
                    <div className='product-image-small-bg'>
                        <img className={'product-image product-image-small product-image3'} id='productImage3' src={productImage3Thumbnail} onClick={handleSelected} alt='Tan and white sneaker sitting on a rock'></img>
                    </div>
                    <div className='product-image-small-bg'>
                        <img className={'product-image product-image-small product-image4'} id='productImage4' src={productImage4Thumbnail} onClick={handleSelected} alt='Tan and white sneaker sitting on a rock'></img>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductDisplay;