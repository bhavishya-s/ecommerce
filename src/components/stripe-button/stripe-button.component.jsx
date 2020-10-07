import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HZ8iDAF2qye9n9o0e1WXhTMfVq3CK4Rt3FJdxefJVFyBXdVVVvIHEqrL5vhdCelGXgjowndp4rcXuWgOnqTPE2K00oCwKHpc9';

    const onToken = token => {
        console.log(token);
        alert("Payment successful.");
    }

    return(<StripeCheckout 
        label="PAY NOW" 
        name="CRWN Clothing" 
        billingAddress 
        shippingAddress 
        image='https://sendeyo.com/up/d/f3eb2117da' 
        description={`Your total price is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}  
        stripeKey={publishableKey}
        />);
}

export default StripeCheckoutButton;