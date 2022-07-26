import './components.css';
import ProductDetail from './ProductDetail';
import ProductDisplay from './ProductDisplay';

function MainContentArea ({ totalInCart, setTotalInCart, addToCart, removeFromCart, potentialInCart, addPotentialToCart, toggleLightBox, currentPic, setCurrentPic, thumbnails, handleSelected }) {
    return (
        <div id='main-content'>
            <ProductDisplay
                toggleLightBox={toggleLightBox}
                currentPic={currentPic}
                setCurrentPic={setCurrentPic}
                thumbnails={thumbnails}
                handleSelected={handleSelected} 
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