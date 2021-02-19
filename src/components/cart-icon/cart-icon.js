import React from "react";
import "./cart-icon.scss";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/images/11.2 shopping-bag.svg"
import { toggleCartHidden } from "../../redux/acions"


const CartIcon = ({ toggleCartHiddenFunc }) => {

    return (
        <div className="cart-icon" onClick={toggleCartHiddenFunc}    >
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count"   > 0 </span>
        </div>
    )
}


const mapDispatchToProps = dispatch => ({
    toggleCartHiddenFunc: () => {
        dispatch(toggleCartHidden())
    },
})

export default connect(null, mapDispatchToProps)(CartIcon);


