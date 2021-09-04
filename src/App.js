import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from './Components/Header/Header';
import Product from './Components/Product/Product';
function App() {
  return (
    <>
    <Header/>
    <Product/>
    </>
  );
}

export default App;
