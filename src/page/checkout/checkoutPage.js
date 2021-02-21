import React from "react";
import { connect } from "react-redux";
import "./checkoutPage.scss"

import { selectCartItems, selectCartTotal } from "../../redux/cartSelector"
import CheckoutItem from "../../components/checkout-item/checkout-item"




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

            <div className="checkout-total">
                <span>TOTAL: ${totalvalueProps}</span>
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





