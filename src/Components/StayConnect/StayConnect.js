import React from 'react'
import './StayConnect.css'
import decorationMar from '../../assets/decorationMar.jpg'
import decorationMotocicle from '../../assets/decorationMotocicle.jpg'
import decorationFuckRacism from '../../assets/decorationFuckRacism.jpg'
export default function StayConnect() {
    return (
       <section className="product-decoration">
         <h5 className="product-decoration__title">#STAYCONNECTED</h5>
         <div className="product-decoration__images">
         <img src={decorationMar} draggable="false" alt="Pessoa Nadando no Mar"/>
         <img src={decorationMotocicle} draggable="false" alt="Pessoa Andando de Motocicleta"/>
         <img src={decorationFuckRacism} draggable="false" alt="Fuck Racism"/>
         </div>
        </section>
    )
}
