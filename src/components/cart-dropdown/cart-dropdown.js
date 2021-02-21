import React from "react";
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'

import "./cart-dropdown.scss"

import { toggleCartHidden } from "../../redux/actions"
import CustomButton from "../custom-button/CustomButton.js"
import CartItem from "../cart-item/Cart-item"

import { selectCartItems } from "../../redux/cartSelector.js"

const CartDropdown = ({ toggleCartHiddenFunc, cartItemsProp, history }) => {

    let handleClick = () => {
        toggleCartHiddenFunc()
        history.push('/checkout')
    }

    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItemsProp.length > 0
                    ? cartItemsProp.map(item => {
                        return <CartItem key={item.id} item={item} />
                    })
                    : <span className="empty_message">Your cart is empty</span>
                }
            </div>

            <CustomButton onClick={handleClick}> go to checkout </CustomButton>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cartItemsProp: selectCartItems(state),
    }
}

const mapDispatchToProps = dispatch => ({
    toggleCartHiddenFunc: () => {
        dispatch(toggleCartHidden())
    },
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));


