import './App.css';
import Header from './components/Header';
import MainContentArea from './components/MainContentArea';

import { useState } from 'react';

function App() {

  const [totalInCart, setTotalInCart] = useState(0);
  const [potentialInCart, setPotentialInCart] = useState(0);


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
      <Header 
        totalInCart={totalInCart}
        resetCart={resetCart}
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
