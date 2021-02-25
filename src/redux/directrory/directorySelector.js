import { createSelector } from "reselect";


const selectDirectory = (state) => state.directoryR;


export const selectDirectorySections = createSelector(
    [selectDirectory],
    (directory) => directory.sections
);


// export const selectCartHidden = createSelector(
//     [selectCart],
//     (cartR) => cartR.hidden
// )



// export const selectCartItemsCount = createSelector(
//     [selectCartItems],
//     cartItems => cartItems.reduce((accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity, 0)
// )


// export const selectCartTotal = createSelector(
//     [selectCartItems],
//     cartItems => cartItems.reduce((accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity * cartItem.price, 0)
// )