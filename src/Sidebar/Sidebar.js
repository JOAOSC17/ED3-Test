import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartContext from '../context/cart/CartContext'
import './Sidebar.css'
export default function Sidebar() {
    const {showHideSide} =useContext(CartContext)
    return (
        <nav className="sidebar">
            <ul className="sidebar-list">
            <li className="sidebar-list__item"><Link to="/">CAMISAS</Link></li>
            <li className="sidebar-list__item"><Link to="/">CALÇAS</Link></li>
            <li className="sidebar-list__item"><Link to="/">BLUSAS</Link></li>
            <li className="sidebar-list__item"><Link to="/">CALÇADOS</Link></li>
            <li className="sidebar-list__item"><Link to="/">ÓCULOS</Link></li>
            <li className="sidebar-list__item"><Link to="/">ACESSÓRIOS</Link></li>
            <li className="sidebar-list__item"><Link to="/">OUTLET</Link></li>
            </ul>
            <button className="sidebar-close"><i className="fas fa-times" aria-hidden="true" onClick={showHideSide}/></button>
        </nav>
    )
}
