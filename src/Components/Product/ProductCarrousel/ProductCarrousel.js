import React, { useContext, useEffect, useRef, useState } from 'react'
import './ProductCarrousel.css'
import axios from 'axios';
import CartContext from '../../../context/cart/CartContext';
import { Link } from 'react-router-dom';

export default function ProductsCarrousel() {
    const [data, setData]=useState([]);
    const {addToCart}=useContext(CartContext);
    useEffect(()=>{
        axios
        .get(`https://my-json-server.typicode.com/JOAOSC17/ED3/products`)
        .then((response)=>{
            setData(response.data)
        })
        .catch(err=>console.error(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const carrousel = useRef(null);
    function handlePrevious(e){
        e.preventDefault();
        carrousel.current.scrollLeft-=carrousel.current.offsetWidth;
    }
    function handleNext(e){
        e.preventDefault();
        carrousel.current.scrollLeft+=carrousel.current.offsetWidth;
    }
    if(!data || !data.length) return  <span className="loading">Carregando...</span>
    return(
        <section className="productsCarrousel">
           
            <h5 className="productsCarrousel__title">VEJA TAMBÉM</h5>
            <button className="productsCarrousel__btns" type="button" onClick={handlePrevious}><i className="fas fa-chevron-left"></i></button>
            <button className="productsCarrousel__btns" onClick={handleNext} type="button"><i className="fas fa-chevron-right"></i></button>
            <div className="productsCarrousel__carrousel" ref={carrousel}>
          {data.map(productCarrousel=>(
            <div key={productCarrousel.id} className="flex-colum">
            <Link to={`/products/${productCarrousel.id}`}><img className="productsCarrousel__carrousel-image" src={productCarrousel.image} draggable="false" alt={`Foto de ${productCarrousel.name}`}/></Link>
            <div className="productsCarrousel__carrousel-info">
            <Link to={`/products/${productCarrousel.id}`}><p className="productsCarrousel__carrousel-info__name">{productCarrousel.name}</p></Link>
             <p className="productsCarrousel__carrousel-info__price">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'  }).format(productCarrousel.currentPrice)}</p>
             </div>
             </div>
            ))}</div>
            
        </section>
    )
}
