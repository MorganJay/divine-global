import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useStripe } from '@stripe/react-stripe-js';

import Spinner from '../loader/spinner.component';

import { clearCart } from '../../redux/cart/cart.actions';

const PaymentStatus = () => {
  const stripe = useStripe();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState(null);

  const navigateAfterTimeout = useCallback(
    (route, seconds = 2) => setTimeout(() => navigate(route), seconds * 1000),
    [navigate]
  );

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Success! Payment received.🚀🥳');
          dispatch(clearCart());
          navigateAfterTimeout('/', 4);
          break;

        case 'processing':
          setMessage(
            "Payment processing. We'll update you when payment is received."
          );
          dispatch(clearCart());
          break;

        case 'requires_payment_method':
          setMessage('Payment failed. Please try another payment method.');
          navigateAfterTimeout('/checkout', 5);
          break;

        default:
          setMessage('Something went wrong. Try again later 😔');
          break;
      }
    });
  }, [stripe, dispatch, navigateAfterTimeout]);

  return message ? (
    <h2 style={{ alignSelf: 'center' }}>{message}</h2>
  ) : (
    <Spinner />
  );
};

export default PaymentStatus;
