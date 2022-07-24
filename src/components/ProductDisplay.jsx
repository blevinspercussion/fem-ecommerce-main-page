import './components.css';
import productImage1 from './img/image-product-1.jpg';
import productImage2 from './img/image-product-2.jpg';
import productImage3 from './img/image-product-3.jpg';
import productImage4 from './img/image-product-4.jpg';
import productImage1Thumbnail from './img/image-product-1-thumbnail.jpg';
import productImage2Thumbnail from './img/image-product-2-thumbnail.jpg';
import productImage3Thumbnail from './img/image-product-3-thumbnail.jpg';
import productImage4Thumbnail from './img/image-product-4-thumbnail.jpg';




function ProductDisplay () {

    const handleSelected = (e) => {
        if (e.target.classList.contains('selected-image')) {
            e.target.classList.remove('selected-image');
        } else {
            e.target.classList.add('selected-image');
        };
    };

    return (
        <div className='product-display'>
            <div className='product-main-image'>
                <img className='product-image product-image-large' src={productImage1}></img>
            </div>
            <div className='product-sub-images'>
                <img className={'product-image product-image-small'} src={productImage1Thumbnail} onClick={handleSelected}></img>
                <img className={'product-image product-image-small'} src={productImage2Thumbnail} onClick={handleSelected}></img>
                <img className={'product-image product-image-small'} src={productImage3Thumbnail} onClick={handleSelected}></img>
                <img className={'product-image product-image-small'} src={productImage4Thumbnail} onClick={handleSelected}></img>
            </div>

        </div>
    )
}

export default ProductDisplay;