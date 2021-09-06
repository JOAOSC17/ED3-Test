import React, { useContext } from 'react'
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
import CartContext from './context/cart/CartContext';
function App() {  
  const {showCart}=useContext(CartContext);
  return (
    <>
    <Header/>
    <Product/>
    <Footer/>
    {showCart &&(
      <div className="cart__overlay">
      <Cart/>
      </div>
      )}
    </>
  );
}

export default App;
