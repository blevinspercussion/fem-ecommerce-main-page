import './App.css';
import Header from './components/Header';
import MainContentArea from './components/MainContentArea';

import { useState } from 'react';

function App() {

  const [totalInCart, setTotalInCart] = useState(0);


  const addToCart = () => {
    setTotalInCart(totalInCart + 1);
  }

  const removeFromCart = () => {
    if (totalInCart > 0) {
      setTotalInCart(totalInCart - 1);
    }
  }

  return (
    <div className="App">
      <Header />
      <hr />
      <MainContentArea 
        totalInCart={totalInCart}
        setTotalInCart={setTotalInCart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
