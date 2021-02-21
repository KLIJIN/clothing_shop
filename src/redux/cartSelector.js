import { createSelector } from "reselect";



const selectCart = (state) => state.cartR;


export const selectCartItems = createSelector(
    [selectCart],
    (cartR) => cartR.cartItems
);


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity, 0)
)