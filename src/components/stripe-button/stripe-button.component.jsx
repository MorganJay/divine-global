import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import Logo from '../../assets/img/DIVINE-GLOBAL.png';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IO9dOBTCm5l4rq8dz1VyxxGqhIAnu3dLNIC6s7cpEedyrSlNb4cTDaw6CPusIp7GExtX47LhKOPDVwyExQ0Vhpd00YhKrDdi4';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Divine Global Store"
      currency="NGN"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is NGN${price} `}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
