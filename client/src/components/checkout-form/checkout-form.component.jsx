import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

import { selectCurrentUser } from '../../redux/user/user.selectors';

import {
  Form,
  Input,
  PaymentMessage,
  PayNowButton,
  Spinner,
} from './checkout-form.styles';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { email } = useSelector(selectCurrentUser);

  const [payerEmail, setEmail] = useState(email || '');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: process.env.REACT_APP_REDIRECT_URL,
        receipt_email: payerEmail,
      },
    });

    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
    alert(message);
  };

  const paymentElementOptions = {
    layout: 'tabs',
  };

  return (
    <Form id="payment-form" onSubmit={handleSubmit}>
      <Input
        type="email"
        id="email"
        value={payerEmail}
        onChange={e => setEmail(e.target.value)}
        placeholder="Enter email address"
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <PayNowButton
        type="submit"
        disabled={isLoading || !stripe || !elements}
        id="submit"
      >
        <span id="button-text">
          {isLoading ? <Spinner className="spinner" /> : 'Pay now'}
        </span>
      </PayNowButton>
      {message && <PaymentMessage>{message}</PaymentMessage>}
    </Form>
  );
};

export default CheckoutForm;
