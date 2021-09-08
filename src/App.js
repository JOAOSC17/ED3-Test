import React, { useContext } from 'react'
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import CartContext from './context/cart/CartContext';
import { BrowserRouter as Router , Route} from 'react-router-dom'
import ProductPage from './pages/ProductPage';
import StayConnect from './Components/StayConnect/StayConnect';
import ProductsCarrousel from './Components/Product/ProductCarrousel/ProductCarrousel';
function App() {  
  const {showCart}=useContext(CartContext);  
  return (
    <Router>
      <Route path="/">
    <Header/>
    </Route>
    <Route path="/products/:id">
      <ProductPage/>
    </Route>
    <Route path="/">
      <ProductsCarrousel/>
    </Route>
    <Route path="/">
      <StayConnect/>
    </Route>
    <Route path="/">
    <Footer/>
    </Route>
    <Route path="/">
    {showCart &&(
      <div className="cart__overlay">
      <Cart/>
      </div>
      )}
      </Route>
    </Router>
  );
}

export default App;
