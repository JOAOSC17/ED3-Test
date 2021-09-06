import React, { useContext } from 'react'
import CartContext from '../../context/cart/CartContext'
import './Header.css'

export default function Header() {
    const {showHideCart}=useContext(CartContext);
    return (
        <header className="header">
        <span className="header-promotion">15% DE DESCONTO NA SEGUNDA COMPRA <span>-</span><u>SAIBA MAIS</u>
        </span>
        <nav className="header-navbar">
        <div className="header-navbar__toggle" id="nav-toggle">
        <i className="fas fa-bars"></i>
        </div>
            <div className="header-navbar__logo"><img src={'./assets/logo.svg'} draggable="false" alt="logo"/></div>
        <div>
        <ul className="header-navbar__links">
            <li className="header-navbar__link-item">CAMISAS</li>
            <li className="header-navbar__link-item">CALÇAS</li>
            <li className="header-navbar__link-item">BLUSAS</li>
            <li className="header-navbar__link-item">CALÇADOS</li>
            <li className="header-navbar__link-item">ÓCULOS</li>
            <li className="header-navbar__link-item">ACESSÓRIOS</li>
            <li className="header-navbar__link-item" style={{color:'#fe2156'}}>OUTLET</li>         
        </ul>    
        </div>
        <div className="header-user">
            <div className="header-user__search">
            <input className="header-user__search-input" type="text"/>
            <button className="header-user__search-btn" type="button"><i className="fas fa-search"></i></button>
            </div>
            <div className="header-user__btns">
           <button className="header-user__btn-cart" type="button" onClick={()=>showHideCart()}><i className="fas fa-shopping-bag"></i></button>
           <button className="header-user__btn-user" type="button"><i className="far fa-user"></i></button>
                </div>          
        </div>
        </nav>
    </header>
    )
}
