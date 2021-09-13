import React, { useEffect, useState } from 'react'
import './ProductCarrousel.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

export default function ProductsCarrousel() {
    const [data, setData]=useState([]);
    useEffect(()=>{
        axios
        .get(`https://my-json-server.typicode.com/JOAOSC17/ED3/products`)
        .then((response)=>{
            setData(response.data)
        })
        .catch(err=>console.error(err))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    function SampleNextArrow(props) {
        const { style, onClick } = props;
        return (
          <button
            style={{ ...style, display: "block"}}
            onClick={onClick}
          ><img className="chevron-right" src={ './assets/chevron-right.svg'} draggable="false" alt="chevron-right"/></button>
        );
      }
      
      function SamplePrevArrow(props) {
        const { style, onClick } = props;
        return (
          <button
            style={{ ...style, display: "block"}}
            onClick={onClick}
          ><img className="chevron-left" src={ './assets/chevron-left.svg'} draggable="false" alt="chevron-left"/></button>
        );
      }
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        initialSlide: 0,
        nextArrow:  <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
          {
            breakpoint: 1140,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
        },
            {
              breakpoint: 590,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
          }
        ]
        }
    if(!data || !data.length) return  <span className="loading">Carregando...</span>
    return(
        <section className="productsCarrousel">
          <h5 className="productsCarrousel__title">VEJA TAMBÉM</h5>           
            <Slider  {...settings}>
          {data.map(productCarrousel=>(
              <div key={productCarrousel.id} className="productsCarrousel__carrousel">
            <Link to={`/products/${productCarrousel.id}`}><img className="productsCarrousel__carrousel-image" src={productCarrousel.images[0]} draggable="false" alt={`Foto de ${productCarrousel.name}`}/></Link>
            <div className="productsCarrousel__carrousel-info">
            <Link to={`/products/${productCarrousel.id}`}><p className="productsCarrousel__carrousel-info__name">{productCarrousel.name}</p></Link>
             <p className="productsCarrousel__carrousel-info__price">{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'  }).format(productCarrousel.currentPrice)}</p>
             </div>
             </div>
            ))}
            </Slider>
        </section>
    )
}
/*

            <button className="productsCarrousel__btns" type="button" onClick={handlePrevious}><i className="fas fa-chevron-left"></i></button>
            <button className="productsCarrousel__btns" onClick={handleNext} type="button"><i className="fas fa-chevron-right"></i></button>
            
*/