import axios from 'axios';
import { connect } from 'react-redux';
import * as Sentry from '@sentry/react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { createStructuredSelector } from 'reselect';

import Spinner from './../../components/loader/spinner.component';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import CheckoutForm from '../../components/checkout-form/checkout-form.component';
import PaymentStatus from '../../components/payment-status/payment-status.component';

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
  const { pathname } = useLocation();

  const isPaymentStatusRoute = pathname.endsWith('status');

  useEffect(() => {
    if (cartItems.length && !isPaymentStatusRoute) {
      axios({
        url: process.env.REACT_APP_BASE_URL + 'create-payment-intent',
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
    }
  }, [cartItems, isPaymentStatusRoute]);

  const appearance = {
    theme: 'stripe',
  };

  const options = {
    clientSecret,
    appearance,
  };

  return (
    <Sentry.ErrorBoundary
      fallback={
        <h1>
          An error occurred please hold on as our engineers are checking it 💪
        </h1>
      }
    >
      <CheckoutPageContainer>
        {!isPaymentStatusRoute && (
          <div>
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
          </div>
        )}
        {clientSecret ? (
          <Elements options={options} stripe={stripePromise}>
            {isPaymentStatusRoute ? <PaymentStatus /> : <CheckoutForm />}
          </Elements>
        ) : (
          <Spinner />
        )}
      </CheckoutPageContainer>
    </Sentry.ErrorBoundary>
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
