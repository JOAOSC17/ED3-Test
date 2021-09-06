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
            <li className="header-navbar__link-item"><a href="#">CAMISAS</a></li>
            <li className="header-navbar__link-item"><a href="#">CALÇAS</a></li>
            <li className="header-navbar__link-item"><a href="#">BLUSAS</a></li>
            <li className="header-navbar__link-item"><a href="#">CALÇADOS</a></li>
            <li className="header-navbar__link-item"><a href="#">ÓCULOS</a></li>
            <li className="header-navbar__link-item"><a href="#">ACESSÓRIOS</a></li>
            <li className="header-navbar__link-item"><a href="#" style={{color:'#fe2156'}} >OUTLET</a></li>         
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
