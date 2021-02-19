import React from "react";

import CustomButton from "../custom-button/CustomButton.js"
import "./cart-dropdown.scss"


const CartDropdown = () => {

    return (
        <div className="cart-dropdown">
            <div className="cart-it"> </div>
            <CustomButton> go to checkout </CustomButton>
        </div>
    )
}

export default CartDropdown;