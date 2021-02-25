import React from 'react'
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IOcjUJe3bIXWiL0B7WF4VtmnwGivdMC90a8NudavtcR77yYuQlCtmGm22zEqnI2uKeM8YchNkHL8jjD5Nq2MdRr00g96Jd5Sg'


    const onToken = token => {
        console.log(token)
        alert("Payment Successful")
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="KLIJIN SHOP"
            billingAddres
            shippingAddress
            image=""
            description={`Your total id ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}


export default StripeCheckoutButton;