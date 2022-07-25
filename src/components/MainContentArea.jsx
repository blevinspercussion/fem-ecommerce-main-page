import './components.css';
import ProductDetail from './ProductDetail';
import ProductDisplay from './ProductDisplay';

function MainContentArea ({ totalInCart, setTotalInCart, addToCart, removeFromCart, potentialInCart, addPotentialToCart }) {
    return (
        <div id='main-content'>
            <ProductDisplay 
            />
            <ProductDetail 
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

export default MainContentArea;