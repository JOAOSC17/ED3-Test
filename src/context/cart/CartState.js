import React, { useEffect, useReducer } from 'react'
import axios from 'axios'
import CartContext from './CartContext'
import CartReducer from './CartReducer';
import { ADD_TO_CART, FETCH_ALL_PRODUCTS_FAILURE, FETCH_ALL_PRODUCTS_LOADING, FETCH_ALL_PRODUCTS_SUCCESS, REMOVE_ITEM, SHOW_HIDE_CART, SHOW_HIDE_SIDEBAR } from '../Types'
import { toast } from 'react-toastify';


export default function CartState({children, id}) {
    const initialValues={
        showSide:false,
        showCart:false,
        isFetching: false,
        error: null,
        cartItems:[],
        products: [],
    }
    const [state, dispatch] = useReducer(CartReducer, initialValues);
    useEffect(()=>{
        dispatch({ type: FETCH_ALL_PRODUCTS_LOADING});
        axios
          .get('https://my-json-server.typicode.com/JOAOSC17/ED3/products')
          .then((response) => {
            let newArray = response.data.map((product) => {
              return { ...product, qty: 0, inCart: false };
            });
            dispatch({ type: FETCH_ALL_PRODUCTS_SUCCESS, payload: newArray });
          })
        .catch((err) => {
            dispatch({ type: FETCH_ALL_PRODUCTS_FAILURE, payload: err });
        });
    },[])
        
    function addToCart(item){
        dispatch({type:ADD_TO_CART, payload:item})
        toast.success('Compra Efetuada Com Sucesso!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
    function showHideCart(){
        dispatch({type:SHOW_HIDE_CART})
    }
    function showHideSide(){
        dispatch({type:SHOW_HIDE_SIDEBAR})
    }
    function removeItem(id){
        dispatch({type:REMOVE_ITEM, payload:id})
    }
    return (
        <CartContext.Provider value={{
            showCart:state.showCart,
            cartItems:state.cartItems,
            addToCart,
            showHideCart,
            removeItem,
            products:state.products,
            showSide:state.showSide,
            showHideSide
        }}>{children}</CartContext.Provider>
    )
}