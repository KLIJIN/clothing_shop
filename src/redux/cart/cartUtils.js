export const addItem = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]

}


export const decreaseItem = (cartItems, cartItemToAdd) => {


    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    // if (existingCartItem.quantity === 1) {
    //     return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    // }
    if (cartItemToAdd.quantity === 1) {
        return cartItems
    }

    if (existingCartItem) {
        // if (cartItemToAdd.quantity === 1) {
        //     return cartItems
        // }
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
    }

    return [...cartItems]

}