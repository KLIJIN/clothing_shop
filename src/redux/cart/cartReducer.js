import { TOGGLE_CART_DROPDOWN, ADD_ITEM } from "../actions"
import { addItemToCart } from "./cartUtils"



const initialState = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case TOGGLE_CART_DROPDOWN:
            console.log(TOGGLE_CART_DROPDOWN, action.type)
            return {
                ...state,
                hidden: !state.hidden
            }

        case ADD_ITEM:
            console.log(ADD_ITEM, action.type)
            return {
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }



        default:
            return state;

    }

}


export default cartReducer;