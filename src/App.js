import './App.css';
import Header from './components/Header';
import MainContentArea from './components/MainContentArea';
import LightBox from './components/LightBox';

import productImage1 from './components/img/image-product-1.jpg';
import productImage2 from './components/img/image-product-2.jpg';
import productImage3 from './components/img/image-product-3.jpg';
import productImage4 from './components/img/image-product-4.jpg';
import productImage1Thumbnail from './components/img/image-product-1-thumbnail.jpg';
import productImage2Thumbnail from './components/img/image-product-2-thumbnail.jpg';
import productImage3Thumbnail from './components/img/image-product-3-thumbnail.jpg';
import productImage4Thumbnail from './components/img/image-product-4-thumbnail.jpg';

import { useState, useRef, useEffect } from 'react';

function App() {

  const [totalInCart, setTotalInCart] = useState(0);
  const [potentialInCart, setPotentialInCart] = useState(0);
  const [lightBoxActive, setLightBoxActive] = useState(false);
  const [currentPic, setCurrentPic] = useState(productImage1);


  let thumbnails = [];

  const darkOverlayDiv = useRef(null);

  useEffect(() => {
    thumbnails = Array.from(
        document.getElementsByClassName('product-image-small')
    );
})

  const handleSelected = (e) => {
    for (let thumbnail in thumbnails) {
        thumbnails[thumbnail].classList.remove('selected-image');
    }
    if (e.target.classList.contains('selected-image')) {
        e.target.classList.remove('selected-image');
    } else {
        e.target.classList.add('selected-image');
    };
    switch (e.target.id) {
        case 'productImage1':
            setCurrentPic(productImage1);
            break;

        case 'productImage2':
            setCurrentPic(productImage2);
            break;

        case 'productImage3':
            setCurrentPic(productImage3);
            break;

        case 'productImage4':
            setCurrentPic(productImage4);
            break;

        default:
            setCurrentPic(productImage1);
    }
  };


  const toggleDarkOverlay = () => {
    darkOverlayDiv.current.classList.contains('dark-overlay') ? darkOverlayDiv.current.classList.remove('dark-overlay') : darkOverlayDiv.current.classList.add('dark-overlay');
    lightBoxActive ? setLightBoxActive(false) : setLightBoxActive(true);
  }



  const addToCart = () => {
    setPotentialInCart(potentialInCart + 1);
  };

  const removeFromCart = () => {
    if (potentialInCart > 0) {
      setPotentialInCart(potentialInCart - 1);
    }
  };

  const addPotentialToCart = () => {
    setTotalInCart(totalInCart + potentialInCart);
    setPotentialInCart(0);
  };

  const resetCart = () => {
    setTotalInCart(0);
  }

  return (
    <div className="App">

    {(() => {
      if (lightBoxActive) {
        return <LightBox toggleDarkOverlay={toggleDarkOverlay} 
        currentPic={currentPic}
        setCurrentPic={setCurrentPic}
        thumbnails={thumbnails}
        handleSelected={handleSelected}
        />
      }
    })()}      

      <div ref={darkOverlayDiv}></div>
      <Header 
        totalInCart={totalInCart}
        resetCart={resetCart}
        toggleDarkOverlay={toggleDarkOverlay}

      />
      <hr />
      <MainContentArea
        totalInCart={totalInCart}
        setTotalInCart={setTotalInCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        potentialInCart={potentialInCart}
        addPotentialToCart={addPotentialToCart}
        toggleDarkOverlay={toggleDarkOverlay}
        currentPic={currentPic}
        setCurrentPic={setCurrentPic}
        thumbnails={thumbnails}
        handleSelected={handleSelected}
      />
    </div>
  );
}

export default App;
