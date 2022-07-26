import './components.css';
import AddRemoveCart from './AddRemoveCart';

function ProductDetail ({ totalInCart, setTotalInCart, addToCart, removeFromCart, potentialInCart, addPotentialToCart }) {
    return (
        <div className='product-detail'>
            <h6 className='product-head'>SNEAKER COMPANY</h6>
            <h1 className='product-title'><strong>Fall Limited Edition Sneakers</strong></h1>
            <p>
                These low-profile sneakers are your perfect casual wear 
                companion. Featuring a durable rubber outer sole, they'll 
                withstand everything the weather can offer.
            </p>
            <div className='prices'>
            <div className='current-price'>
                <h2>$125.00</h2>
                <h4 className='discount'>50%</h4>
            </div>
            <h3 className='old-price'>$250.00</h3>
            </div>
            <AddRemoveCart 
                totalInCart={totalInCart}
                setTotalInCart={setTotalInCart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                potentialInCart={potentialInCart}
                addPotentialToCart={addPotentialToCart}
            />
        </div>
    )
}

export default ProductDetail;