import { createSelector } from "reselect";



const selectShopData = (state) => state.shopR;


export const selectShopSections = createSelector(
    [selectShopData],
    (shop) => shop.sections
);




export const selectCollection = collectionUrlParam => {
    return (
        createSelector(
            [selectShopSections],
            collections => collections[collectionUrlParam]
        )
    )
}

export const selectCollectionsForPreview = createSelector(
    [selectShopSections],
    collections => Object.keys(collections).map(key => collections[key])
)


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