export const SET_CURRENT_USER = "SET_CURRENT_USER"
export const TOGGLE_CART_DROPDOWN = "TOGGLE_CART_DROPDOWN"
export const ADD_ITEM = "ADD_ITEM"




export const setCurrentUserAction = (user) => ({
    type: SET_CURRENT_USER,
    payload: user,
})

export const toggleCartHidden = () => ({
    type: TOGGLE_CART_DROPDOWN,
})


export const addItemAction = (item) => ({
    type: ADD_ITEM,
    payload: item,
})





