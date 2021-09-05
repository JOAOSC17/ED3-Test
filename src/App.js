import React, { useContext } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import CartContext from './context/cart/CartContext';
function App() {  
  const {showCart}=useContext(CartContext);
  return (
    <>
    <Header/>
    <Product/>
    {showCart &&(
      <div className="cart__overlay">
      <Cart/>
      </div>
      )}
    </>
  );
}

export default App;
