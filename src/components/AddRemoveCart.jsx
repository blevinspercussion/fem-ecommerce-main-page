import './components.css';
import plusSign from './img/icon-plus.svg';
import minusSign from './img/icon-minus.svg'
import shoppingCart from './img/icon-cart.svg';

function AddRemoveCart ({ totalInCart, setTotalInCart, addToCart, removeFromCart, potentialInCart, addPotentialToCart }) {

    const handleMinusClick = () => {
        removeFromCart();
    }

    const handlePlusClick = () => {
        addToCart();
    }

    const handleAddToCart = () => {
        addPotentialToCart();
    }

    return (
        <div className='add-remove-cart'>
            <div className='add-remove-amount'>
                <div className='plus-minus-div' onClick={handleMinusClick}>
                    <img className='plus-minus' src={minusSign} ></img>
                </div>
                <p>{potentialInCart}</p>
                <div className='plus-minus-div' onClick={handlePlusClick}>
                    <img className='plus-minus' src={plusSign} ></img>
                </div>
            </div>
            <div className='add-to-cart' onClick={handleAddToCart}>
                <img className='cart-icon' src={shoppingCart}></img>
                <p>Add to cart</p>
            </div>
        </div>
    )
}

export default AddRemoveCart;