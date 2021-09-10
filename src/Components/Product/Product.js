import axios from 'axios'
import React, { useContext, useEffect, useState} from 'react'
import './Product.css'
import Slider from 'react-slick';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import CartContext from '../../context/cart/CartContext';
function SampleNextArrow(props) {
    const { style, onClick } = props;
    return (
      <button
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      ><i className="fas fa-chevron-right"/></button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { style, onClick } = props;
    return (
      <button
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      ><i className="fas fa-chevron-left"/></button>
    );
  }
export default function Product({id}) {
    const {addToCart}= useContext(CartContext)
    function formatCurrency (currency){
        return  new Intl.NumberFormat('pt-BR', {style:'currency', currency:'BRL'}).format(currency)
      }
    const [product, setProduct] = useState([])
    useEffect(()=>{
        axios
        .get(`https://my-json-server.typicode.com/JOAOSC17/ED3/products/${id}`)
        .then(response=>setProduct(response.data))
        .catch(err=>console.error(err))
        console.log(product);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 3,
        nextArrow:  <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
          {
            breakpoint: 1140,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          }
        ]
        }
  if(product.length===0) return <span className="loading">Carregando...</span>
    return (
          
             <section className="productSingle">
              <div className="productSingle-images">
        <Slider  {...settings}>
           {product.images.map(item=>(<img key={item} sytle={{maxWidth:'50%'}} src={item} draggable="false" alt={`Foto De ${product.name}`}/>))}
      
</Slider>
</div>
                 <div className="productSingle-info">
                 <div className="productSingle-info__princ">
                     <span className="productSingle-info__princ-back">‹  VOLTAR PARA BLUSAS</span>
                     <h1 className="productSingle-info__princ-title">{product.name}</h1>
                     <span className="productSingle-info__princ-price"><s>{(product.previousPrice) && (formatCurrency(product.previousPrice))}</s>{formatCurrency(product.currentPrice)}</span>
                     <span className="productSingle-info__princ-cardPortion">EM ATÉ 3X DE R$80,70</span>
                 </div>
                 <div className="productSingle-info__colors">
             <label ><input className="radioButton" type="radio" name="options" />
                 <div className="productSingle-info__colors-option" style={(product.colors[0])?{backgroundColor:`${product.colors[0]}`}:('')}>
                 </div>
                 </label>
                
             <label ><input className="radioButton" type="radio" name="options"/>
                 <div className="productSingle-info__colors-option" style={(product.colors[1])?{backgroundColor:`${product.colors[1]}`}:('')}>
                 </div>
                 </label>
                 </div>
             <div className="productSingle-info__sizes">
                
             <div className="sizes">
             <label ><input className="radioButton" type="radio" name="options"/>
                 <span id="p" className={`productSingle-info__sizes-size ${(product.sizes.p) ?("active"):('')}`}>P</span></label>
                 <br/>
                 <label><input className="radioButton" type="radio" name="options"/><span className={`productSingle-info__sizes-size ${(product.sizes.m) ?("active"):('')}`} id="m">M</span></label>
                 <br/>
                 <label><input className="radioButton" type="radio" name="options"/><span className={`productSingle-info__sizes-size ${(product.sizes.g) ?("active"):('')}`} id="g">G</span></label>
                 <br/>
                 <label><input className="radioButton" type="radio" name="options"/><span className={`productSingle-info__sizes-size ${(product.sizes.xg) ?("active"):('')}`} id="xg">XG</span></label>
                </div>
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
    )
}

/*
nextArrow:  <button className="productSingle-images__btns" type="button"><i className="fas fa-chevron-right"/></button>,
        prevArrow: <button className="productSingle-images__btns" type="button"><i className="fas fa-chevron-left"/></button>,

            <div sytle={{maxWidth:500}}>
        {product.images.map(item=>(<img sytle={{maxWidth:'100%'}} src={item} draggable="false" alt={`Foto De ${product.name}`}/>))}
</div>        */