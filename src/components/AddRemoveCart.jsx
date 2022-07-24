import './components.css';
import plusSign from './img/icon-plus.svg';
import minusSign from './img/icon-minus.svg'
import shoppingCart from './img/icon-cart.svg';

function AddRemoveCart () {
    return (
        <div className='add-remove-cart'>
            <div className='add-remove-amount'>
                <img className='plus-minus' src={minusSign}></img>
                <p>0</p>
                <img className='plus-minus' src={plusSign}></img>
            </div>
            <div className='add-to-cart'>
                <img className='cart-icon' src={shoppingCart}></img>
                <p>Add to cart</p>
            </div>
        </div>
    )
}

export default AddRemoveCart;