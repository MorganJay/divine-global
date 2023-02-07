import axios from 'axios';
import { connect } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import React, { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CheckoutForm from '../../components/checkout-form/checkout-form.component';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import { clearCart } from '../../redux/cart/cart.actions';

import {
  CheckoutHeader,
  CheckoutPageContainer,
  HeaderBlock,
  RemoveItemContainer,
  WarningTextContainer,
  TotalContainer,
} from './checkout.styles';

const date = new Date();
const month = date.getMonth() + 2;
let expiry = `${month < 10 ? '0' + month : month}/${date
  .getFullYear()
  .toString()
  .slice(2)}`;

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutPage = ({ cartItems, total, clearAllItems }) => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    axios({
      url: 'create-payment-intent',
      method: 'POST',
      data: {
        items: cartItems,
      },
    })
      .then(({ data }) => {
        setClientSecret(data.clientSecret);
      })
      .catch(error => {
        console.log('Payment intent error', JSON.parse(error));
      });
  }, [cartItems]);

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <CheckoutPageContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <RemoveItemContainer onClick={clearAllItems}>
          <span>Clear All</span>
        </RemoveItemContainer>
      </CheckoutHeader>
      {cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>
        <span>TOTAL: &#36;{total}</span>
      </TotalContainer>
      <WarningTextContainer>
        *Please use the following test credit card for payment*
        <br />
        4242 4242 4242 4242 - Exp: {expiry} - CVV 123
      </WarningTextContainer>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </CheckoutPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = dispatch => ({
  clearAllItems: () => dispatch(clearCart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
