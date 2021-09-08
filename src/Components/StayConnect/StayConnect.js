import React from 'react'
import './StayConnect.css'
export default function StayConnect() {
    return (
       <section className="product-decoration">
         <h5 className="product-decoration__title">#STAYCONNECTED</h5>
         <div className="product-decoration__images">
         <img src={'./assets/decorationMar.jpg'} draggable="false" alt="Pessoa Nadando no Mar"/>
         <img src={'./assets/decorationMotocicle.jpg'} draggable="false" alt="Pessoa Andando de Motocicleta"/>
         <img src={'./assets/decorationFuckRacism.jpg'} draggable="false" alt="Fuck Racism"/>
         </div>
        </section>
    )
}
