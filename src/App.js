import './App.css';
import Header from './components/Header';
import MainContentArea from './components/MainContentArea';
import LightBox from './components/LightBox';

import { useState, useRef } from 'react';

function App() {

  const [totalInCart, setTotalInCart] = useState(0);
  const [potentialInCart, setPotentialInCart] = useState(0);
  const [lightBoxActive, setLightBoxActive] = useState(false);

  const darkOverlayDiv = useRef(null);


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
        return <LightBox toggleDarkOverlay={toggleDarkOverlay} />
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
      />
    </div>
  );
}

export default App;
