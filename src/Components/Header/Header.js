import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CartContext from '../../context/cart/CartContext'
import './Header.css'

export default function Header() {
    const {showHideCart, showHideSide}=useContext(CartContext);
    return (
        <header className="header">
        <span className="header-promotion">15% DE DESCONTO NA SEGUNDA COMPRA <span>-</span><u>SAIBA MAIS</u>
        </span>
        <nav className="header-navbar">
        <button className="header-navbar__toggle" id="nav-toggle" onClick={()=>showHideSide()}type="button">
        <i className="fas fa-bars"></i>
        </button>
            <div className="header-navbar__logo"><img src={'./assets/logo.svg'} draggable="false" alt="logo"/></div>
        <div>
        <ul className="header-navbar__links">
            <li className="header-navbar__link-item"><Link to="/">CAMISAS</Link></li>
            <li className="header-navbar__link-item"><Link to="/">CALÇAS</Link></li>
            <li className="header-navbar__link-item"><Link to="/">BLUSAS</Link></li>
            <li className="header-navbar__link-item"><Link to="/">CALÇADOS</Link></li>
            <li className="header-navbar__link-item"><Link to="/">ÓCULOS</Link></li>
            <li className="header-navbar__link-item"><Link to="/">ACESSÓRIOS</Link></li>
            <li className="header-navbar__link-item" style={{color:'#fe2156'}}><Link to="/">OUTLET</Link></li>         
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
