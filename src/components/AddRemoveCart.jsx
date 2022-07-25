import './components.css';
import plusSign from './img/icon-plus.svg';
import minusSign from './img/icon-minus.svg'
import shoppingCart from './img/icon-cart.svg';

function AddRemoveCart ({ totalInCart, setTotalInCart, addToCart, removeFromCart }) {

    const handleMinusClick = () => {
        removeFromCart();
    }

    const handlePlusClick = () => {
        addToCart();
    }

    return (
        <div className='add-remove-cart'>
            <div className='add-remove-amount'>
                <div className='plus-minus-div' onClick={handleMinusClick}>
                    <img className='plus-minus' src={minusSign} ></img>
                </div>
                <p>{totalInCart}</p>
                <div className='plus-minus-div' onClick={handlePlusClick}>
                    <img className='plus-minus' src={plusSign} ></img>
                </div>
            </div>
            <div className='add-to-cart'>
                <img className='cart-icon' src={shoppingCart}></img>
                <p>Add to cart</p>
            </div>
        </div>
    )
}

export default AddRemoveCart;