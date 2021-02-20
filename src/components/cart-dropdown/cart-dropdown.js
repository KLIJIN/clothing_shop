import React from "react";
import "./cart-dropdown.scss"
import { connect } from "react-redux"

import CustomButton from "../custom-button/CustomButton.js"
import CartItem from "../cart-item/Cart-item"

const CartDropdown = ({ cartItemsProp }) => {

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItemsProp.map(item => {
                    return <CartItem key={item.id} item={item} />
                })}
            </div>
            <CustomButton> go to checkout </CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItemsProp: state.cartR.cartItems,
    }
}


export default connect(mapStateToProps)(CartDropdown);