import './components.css';
import ProductDetail from './ProductDetail';
import ProductDisplay from './ProductDisplay';

function MainContentArea ({ totalInCart,
                            setTotalInCart,
                            addToCart,
                            removeFromCart,
                            potentialInCart,
                            addPotentialToCart,
                            toggleLightBox,
                            currentPic,
                            setCurrentPic,
                            thumbnails,
                            handleSelected,
                            handleThumbnailSelect,
                            handleRightArrowClick,
                            handleLeftArrowClick, 
                            cartIsHovering,
                            setCartIsHovering,
                        }) {

    const handleHideCart = () => {
        if (cartIsHovering) {
            setCartIsHovering(false);
        }
    };
    

    return (
        <div id='main-content' onClick={handleHideCart}>
            <ProductDisplay
                toggleLightBox={toggleLightBox}
                currentPic={currentPic}
                setCurrentPic={setCurrentPic}
                thumbnails={thumbnails}
                handleSelected={handleSelected} 
                handleLeftArrowClick={handleLeftArrowClick}
                handleRightArrowClick={handleRightArrowClick}
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