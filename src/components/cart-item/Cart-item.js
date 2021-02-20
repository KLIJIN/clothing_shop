import React from "react";
import "./CartItem.scss"



const CartItem = ({ item }) => {

    const { id, name, price, imageUrl, quantity } = item;

    return (
        <div className="cart-item">
            <img src={imageUrl} alt="image icon" />
            <div className="item-details">
                <span className="item-name" > {name} </span>
                <span className="price"> {quantity} X ${price}  </span>
            </div>
        </div>
    )
}

export default CartItem;






