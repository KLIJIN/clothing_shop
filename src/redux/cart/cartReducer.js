import { TOGGLE_CART_DROPDOWN } from "../acions"

const initialState = {
    hidden: true,
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case TOGGLE_CART_DROPDOWN:
            console.log(TOGGLE_CART_DROPDOWN, action.type)
            return {
                ...state,
                hidden: !state.hidden
            }

        default:
            return state;

    }

}


export default cartReducer;