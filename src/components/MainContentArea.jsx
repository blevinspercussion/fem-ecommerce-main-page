import './components.css';
import ProductDetail from './ProductDetail';
import ProductDisplay from './ProductDisplay';

function MainContentArea ({ totalInCart, setTotalInCart, addToCart, removeFromCart }) {
    return (
        <div id='main-content'>
            <ProductDisplay />
            <ProductDetail 
                totalInCart={totalInCart}
                setTotalInCart={setTotalInCart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
            />
        </div>
    )
}

export default MainContentArea;