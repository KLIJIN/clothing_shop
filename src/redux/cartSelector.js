import { createSelector } from "reselect";


const selectCart = (state) => state.cartR;


export const selectCartItems = createSelector(
    [selectCart],
    (cartR) => cartR.cartItems
);


export const selectCartHidden = createSelector(
    [selectCart],
    (cartR) => cartR.hidden
)



export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity, 0)
)


export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity * cartItem.price, 0)
)