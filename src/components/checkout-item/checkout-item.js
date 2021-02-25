import React from "react";
import { connect } from "react-redux";

import "./checkout-item.scss";

import { removeItemAction, addItemAction, decreaseItemAction } from "../../redux/actions"

const CheckoutItem = ({ cartItem, removeItemFunc, addItemFunc, decreaseItemFunc }) => {

    const { name, imageUrl, price, quantity } = cartItem

    const decreaseHandler = (cartItem) => {
        if (cartItem.quantity === 1) {
            return cartItem
        }
        decreaseItemFunc(cartItem)
    }

    return (
        <div className='checkout-item' >
            <div className="checkout-image"> <img src={imageUrl} alt="image" /> </div>
            <span className="name" > {name}  </span>
            <div className="quantity" >
                <div className="arrow" onClick={() => decreaseHandler(cartItem)} > &#10094; </div>
                <span className="value" > {quantity} </span>
                <div className="arrow" onClick={() => addItemFunc(cartItem)} > &#10095; </div>
            </div>
            <span className="price" > {price} </span>
            <div className="remove-button" onClick={() => removeItemFunc(cartItem)}  > &#10007;  </div>
        </div>

    )
}


const mapDispatchToProps = dispatch => ({
    removeItemFunc: (item) => dispatch(removeItemAction(item)),
    decreaseItemFunc: (item) => dispatch(decreaseItemAction(item)),
    addItemFunc: (item) => dispatch(addItemAction(item)),
})

export default connect(null, mapDispatchToProps)(CheckoutItem);





