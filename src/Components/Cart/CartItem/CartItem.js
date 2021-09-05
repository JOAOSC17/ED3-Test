import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../../context/cart/CartContext'
import './CartItem.css'
export default function CartItem({item, formatCurrency}) {
    const {removeItem, cartItems} = useContext(CartContext);
    useEffect(()=>{
    },[])
    return (
        <li className="cartItem">
            <img className="cartItem__image" src={item.image} alt={`Foto de ${item.name}`}/>
            <div className="cartItem__info">
                <h6 className="cartItem__info-title">{item.name} </h6>
                <span className="cartItem__info-qty">{`${Math.ceil(item.qty)} unidades`}</span>
                <span className="cartItem__info-price">{ item.previousPrice && (<s>{formatCurrency(item.previousPrice)}</s>)}{formatCurrency(item.currentPrice)}</span>
            <button className="cartItem__info-btn" onClick={()=>removeItem(item._id)}>Remover</button>
            </div>
        </li>
    )
}