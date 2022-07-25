import './components.css';
import productImage1 from './img/image-product-1-thumbnail.jpg';


function HoverCart ({ totalInCart }) {

    if (totalInCart === 0) {
        return (
            <div className='hover-cart'>
            <h5>Cart</h5>
            <hr />
            <p>Your cart is empty</p>
        </div>
        )
    } else {


        return (
            <div className='hover-cart'>
                <h5>Cart</h5>
                <hr />
                <div className='hover-cart-body'>
                    <div className='hover-cart-total'>
                        <img className='cart-thumbnail' src={productImage1}></img>
                        <div className='cart-description'>
                            <p>Fall Limited Edition Sneakers</p>
                            <p>$125.00 x {totalInCart} <strong>${125*totalInCart}.00</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HoverCart;