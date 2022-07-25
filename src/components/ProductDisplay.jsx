import './components.css';
import { useEffect, useState } from 'react';
import productImage1 from './img/image-product-1.jpg';
import productImage2 from './img/image-product-2.jpg';
import productImage3 from './img/image-product-3.jpg';
import productImage4 from './img/image-product-4.jpg';
import productImage1Thumbnail from './img/image-product-1-thumbnail.jpg';
import productImage2Thumbnail from './img/image-product-2-thumbnail.jpg';
import productImage3Thumbnail from './img/image-product-3-thumbnail.jpg';
import productImage4Thumbnail from './img/image-product-4-thumbnail.jpg';




function ProductDisplay ({ toggleDarkOverlay, currentPic, handleCurrentPic, thumbnails, handleSelected }) {


    return (
        <div className='product-display'>
            <div className='product-main-image'>
                <img className='product-image product-image-large' src={currentPic} onClick={toggleDarkOverlay}></img>
            </div>
            <div className='product-sub-images'>
                <div className='product-image-small-div'>
                    <img className={'product-image product-image-small selected-image product-image1'} id='productImage1' src={productImage1Thumbnail} onClick={handleSelected}></img>
                </div>
                <div className='product-image-small-div'>
                    <img className={'product-image product-image-small product-image2'} id='productImage2' src={productImage2Thumbnail} onClick={handleSelected}></img>
                </div>
                <div className='product-image-small-div'>
                    <img className={'product-image product-image-small product-image3'} id='productImage3' src={productImage3Thumbnail} onClick={handleSelected}></img>
                </div>
                <div className='product-image-small-div'>
                    <img className={'product-image product-image-small product-image4'} id='productImage4' src={productImage4Thumbnail} onClick={handleSelected}></img>
                </div>
            </div>

        </div>
    )
}

export default ProductDisplay;