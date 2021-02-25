import { TOGGLE_CART_DROPDOWN, ADD_ITEM, DECREASE_ITEM, REMOVE_ITEM } from "../actions"
import { addItem, decreaseItem, } from "./cartUtils"


const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_CART_DROPDOWN:
            // console.log(TOGGLE_CART_DROPDOWN, action.type)
            return {
                ...state,
                hidden: !state.hidden
            }

        case ADD_ITEM:
            // console.log(ADD_ITEM, action.type)
            return {
                ...state,
                cartItems: addItem(state.cartItems, action.payload)
            }

        case DECREASE_ITEM:
            // console.log(DECREASE_ITEM, action.type)
            return {
                ...state,
                cartItems: decreaseItem(state.cartItems, action.payload)
            }

        case REMOVE_ITEM:
            // console.log(REMOVE_ITEM, action.type)
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)
            }

        default:
            return state;
    }

}


export default cartReducer;