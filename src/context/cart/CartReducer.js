import { ADD_TO_CART, FETCH_ALL_PRODUCTS_FAILURE, FETCH_ALL_PRODUCTS_LOADING, FETCH_ALL_PRODUCTS_SUCCESS, REMOVE_ITEM, SHOW_HIDE_CART, SHOW_HIDE_SIDEBAR } from '../Types'
export default function CartReducer(state, action) {
    switch(action.type){
        case FETCH_ALL_PRODUCTS_LOADING:{
            return {
                ...state,
                isFetching: true,
            }
        }
        case FETCH_ALL_PRODUCTS_SUCCESS:{
            return {
                ...state,
                products: action.payload,
                isFetching: false,
            }
        }
        case FETCH_ALL_PRODUCTS_FAILURE:{
            return{
                ...state,
                error: action.payload,
            }
        }
        case SHOW_HIDE_CART:{
            return{
                ...state,
                showCart:!state.showCart
            }
        }
        case SHOW_HIDE_SIDEBAR:{
            return{
                ...state,
                showSide:!state.showSide
            }
        }
        case ADD_TO_CART:{
            let  productsCopy = [...state.products];
            let match = productsCopy.filter((item) => item.id === action.payload.id)
            if(match){
                match[0].qty+=.5;
                match[0].inCart= true;            
            }
            return{
               ...state, 
               products: productsCopy,
               cartItems:match
            }
        }
        case REMOVE_ITEM:{
            return{
                ...state,
                cartItems:state.cartItems.filter((item)=>item._id!==action.payload)
            }
        }
        default:{
            return state
        }
    }
}
