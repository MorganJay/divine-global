import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';


import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';
import { clearAllItemsFromCart } from '../../redux/cart/cart.actions';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total, clearAllItems }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block remove-items" onClick={() => clearAllItems(cartItems)}>
        <span>Clear All</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: &#8358;{total}</span>
    </div>
    <div className="text-warning">
      *Please use the following test credit card for payment*
      <br/>
      4242 4242 4242 4242 - Exp: 05/21 -CVV 123
    </div>
    <StripeCheckoutButton price={total}/>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const mapDispatchToProps = dispatch => ({
  clearAllItems: items => dispatch(clearAllItemsFromCart(items))
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
