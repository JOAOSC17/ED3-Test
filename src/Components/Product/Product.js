import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import './Product.css'
import ProductCarrousel from './ProductCarrousel/ProductCarrousel'
import CartContext from '../../context/cart/CartContext';
export default function Product() {
    const [product, setProduct] = useState([])
    const {addToCart}= useContext(CartContext)
    function formatCurrency (currency){
      return  new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(currency)
    }
    useEffect(()=>{
        axios
        .get(`https://my-json-server.typicode.com/JOAOSC17/ED3/products/1`)
        .then(response=>setProduct(response.data))
        .catch(err=>console.error(err))
        console.log(product);
    },[])
    if(product.length===0) return <span>Carregando..</span>
    return (
        <main className="main">
            <section className="productSingle">
                <div className="productSingle-images">
                    <button className="productSingle-images__btns" type="button"><i className="fas fa-chevron-left"/></button>
                    <img src={product.image} draggable="false" alt={`Foto De ${product.name}`}/>
                    <img src={product.zomImage} draggable="false" alt={`Foto De ${product.name}`}/>
                    <button className="productSingle-images__btns" type="button"><i className="fas fa-chevron-right"/></button>
                </div>
                <div className="productSingle-info">
                <div className="productSingle-info__princ">
                    <span className="productSingle-info__princ-back">‹  VOLTAR PARA BLUSAS</span>
                    <h1 className="productSingle-info__princ-title">{product.name}</h1>
                    <span className="productSingle-info__princ-price"><s>{formatCurrency(product.previousPrice)}</s>{formatCurrency(product.currentPrice)}</span>
                    <span className="productSingle-info__princ-cardPortion">EM ATÉ 3X DE R$80,70</span>
                </div>
                <div className="productSingle-info__colors">
                <div className="productSingle-info__colors-option" style={(product.id===1)?{backgroundColor:`${product.colors[0].colorHex}`}:('')}>
                </div>
                <div className="productSingle-info__colors-option" style={(product.id===1)?{backgroundColor:`${product.colors[1].colorHex}`}:('')}>
                </div>
                </div>
            <div className="productSingle-info__sizes">
                <span className={`productSingle-info__sizes-size ${(product.sizes.p) ?("active"):('')}`}>P</span>
                <span className={`productSingle-info__sizes-size ${(product.sizes.m) ?("active"):('')}`}>M</span>
                <span className={`productSingle-info__sizes-size ${(product.sizes.g) ?("active"):('')}`}>G</span>
                <span className={`productSingle-info__sizes-size ${(product.sizes.xg) ?("active"):('')}`}>XG</span>
                <span className="productSingle-info__sizes-guide">Ver guia de tamanhos</span>
                    <div className="productSingle-info__cta">
                        <button className="productSingle-info__cta-addCart" onClick={()=>addToCart(product)}>ADICIONAR À SACOLA</button>
                        <p className="productSingle-info__cta-desc">Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit. Integer sed gravida arcu. Aliquam molestie dapibus 
                        ligula, id consectetur enim euismod vel. In vulputat.</p>
                        <p className="productSingle-info__cta-moreDetails">MAIS DETALHES</p>
                   <div className="productSingle-info__cta__transport">
                            <button>CALCULAR PRAZO DE ENTREGA</button>
                            <div></div>
                            <button>TROCA E DEVOLUÇÃO</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <ProductCarrousel product={product}/>
        <section className="product-decoration">
         <h5 className="product-decoration__title">#STAYCONNECTED</h5>
         <div className="product-decoration__images">
         <img src={process.env.PUBLIC_URL + './assets/decorationMar.jpg'} draggable="false" alt="Pessoa Nadando no Mar"/>
         <img src={process.env.PUBLIC_URL + './assets/decorationMotocicle.jpg'} draggable="false" alt="Pessoa Andando de Motocicleta"/>
         <img src={process.env.PUBLIC_URL + './assets/decorationFuckRacism.jpg'} draggable="false" alt="Fuck Racism"/>
         </div>
        </section>
      
        </main>
    )
}
