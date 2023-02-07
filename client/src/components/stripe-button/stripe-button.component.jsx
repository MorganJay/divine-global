import React from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

import { clearCart } from '../../redux/cart/cart.actions';

import Logo from '../../assets/img/DIVINE-GLOBAL.png';

const StripeCheckoutButton = ({ price }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const priceForStripe = price * 100;
  const publishableKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'POST',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then(response => {
        dispatch(clearCart());
        alert('Payment successful');
        navigate('/');
      })
      .catch(error => {
        console.log('Payment error', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please ensure your use the provided credit card details'
        );
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Divine Global Store"
      currency="USD"
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price} `}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
