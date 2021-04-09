import React from "react";
import "./cart-icon.scss";
import { connect } from "react-redux";

import { ReactComponent as ShoppingIcon } from "../../assets/images/11.2 shopping-bag.svg"
import { toggleCartHidden } from "../../redux/actions"
import { selectCartItemsCount } from "../../redux/cartSelector.js"

const CartIcon = ({ toggleCartHiddenFunc, itemCountProps }) => {

    return (
        <div className="cart-icon" onClick={toggleCartHiddenFunc} >
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count" > {itemCountProps} </span>
        </div>
    )
}


const mapStateToProps = (state) => {

    return {
        itemCountProps: selectCartItemsCount(state)
    }
}


const mapDispatchToProps = dispatch => ({
    toggleCartHiddenFunc: () => {
        dispatch(toggleCartHidden())
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);


