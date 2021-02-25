import React from "react";
import { connect } from "react-redux";
import "./checkoutPage.scss"

import { selectCartItems, selectCartTotal } from "../../redux/cartSelector"
import CheckoutItem from "../../components/checkout-item/checkout-item"
import StripeCheckoutButton from "../../components/stripe-button/stripe-button"



const CheckoutPage = ({ cartItemsProps, totalvalueProps }) => {

    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <span className="checkout-title" > Product </span>
                <span className="checkout-title" > Description </span>
                <span className="checkout-title" > Quantity </span>
                <span className="checkout-title" > Price </span>
                <span className="checkout-title" > Remove </span>
            </div>

            {
                cartItemsProps.map(cartItem => {
                    return <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                })
            }

            <div className="checkout-total"> <span>TOTAL: ${totalvalueProps}</span> </div>
            <StripeCheckoutButton price={totalvalueProps} />
            <div className="checkout-warning">
                *Please use the followig test credit card for payment* <br />
                4242 4242 4242 4242 - Exp: 01/22  - CVV: 123 <br />
                5555 5555 5555 4444 - Exp: 01/22  - CVV: 123
            </div>


        </div >
    )
}

const mapStateToProps = (state) => {

    return {
        cartItemsProps: selectCartItems(state),
        totalvalueProps: selectCartTotal(state),
    }
}



export default connect(mapStateToProps)(CheckoutPage);





