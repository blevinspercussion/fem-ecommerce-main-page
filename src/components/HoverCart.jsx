import './components.css';
import productImage1 from './img/image-product-1-thumbnail.jpg';
import trashIcon from './img/icon-delete.svg';


function HoverCart ({ totalInCart, handleCartMouseExit }) {

    if (totalInCart === 0) {
        return (
            <div className='hover-cart' onMouseLeave={handleCartMouseExit}>
            <h5>Cart</h5>
            <hr />
            <p>Your cart is empty</p>
        </div>
        )
    } else {


        return (
            <div className='hover-cart' onMouseLeave={handleCartMouseExit}>
                <h5>Cart</h5>
                <hr />
                <div className='hover-cart-body'>
                    <div className='hover-cart-total'>
                        <img className='cart-thumbnail' src={productImage1}></img>
                        <div className='cart-description'>
                            <p>Fall Limited Edition Sneakers</p>
                            <p className='cart-total'>$125.00 x {totalInCart} <strong>${125*totalInCart}.00</strong></p>
                        </div>
                        <img className='trash-icon' src={trashIcon}></img>
                    </div>
                </div>
                <div className='checkout-button'>
                    <p>Checkout</p>
                </div>
            </div>
        )
    }
}

export default HoverCart;