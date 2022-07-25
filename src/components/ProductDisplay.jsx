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




function ProductDisplay () {

    let thumbnails = [];

    const [currentPic, setCurrentPic] = useState(productImage1);

    useEffect(() => {
        thumbnails = Array.from(
            document.getElementsByClassName('product-image-small')
        );
    })
    
    const handleSelected = (e) => {
        for (let thumbnail in thumbnails) {
            thumbnails[thumbnail].classList.remove('selected-image');
        }
        if (e.target.classList.contains('selected-image')) {
            e.target.classList.remove('selected-image');
        } else {
            e.target.classList.add('selected-image');
        };
        switch (e.target.id) {
            case 'productImage1':
                setCurrentPic(productImage1);
                break;

            case 'productImage2':
                setCurrentPic(productImage2);
                break;

            case 'productImage3':
                setCurrentPic(productImage3);
                break;

            case 'productImage4':
                setCurrentPic(productImage4);
                break;

            default:
                setCurrentPic(productImage1);
        }
    };

    return (
        <div className='product-display'>
            <div className='product-main-image'>
                <img className='product-image product-image-large' src={currentPic}></img>
            </div>
            <div className='product-sub-images'>
                <div className='product-image-small-div'>
                    <img className={'product-image product-image-small selected-image'} id='productImage1' src={productImage1Thumbnail} onClick={handleSelected}></img>
                </div>
                <div className='product-image-small-div'>
                    <img className={'product-image product-image-small'} id='productImage2' src={productImage2Thumbnail} onClick={handleSelected}></img>
                </div>
                <div className='product-image-small-div'>
                    <img className={'product-image product-image-small'} id='productImage3' src={productImage3Thumbnail} onClick={handleSelected}></img>
                </div>
                <div className='product-image-small-div'>
                    <img className={'product-image product-image-small'} id='productImage4' src={productImage4Thumbnail} onClick={handleSelected}></img>
                </div>
            </div>

        </div>
    )
}

export default ProductDisplay;