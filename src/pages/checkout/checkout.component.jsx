import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { clearAllItemsFromCart } from "../../redux/cart/cart.actions";

import {
  CheckoutHeader,
  CheckoutPageContainer,
  HeaderBlock,
  RemoveItemContainer,
  WarningTextContainer,
  TotalContainer,
} from "./checkout.styles";

const CheckoutPage = ({ cartItems, total, clearAllItems }) => (
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
      <RemoveItemContainer onClick={() => clearAllItems(cartItems)}>
        <span>Clear All</span>
      </RemoveItemContainer>
    </CheckoutHeader>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>
      <span>TOTAL: &#8358;{total}</span>
    </TotalContainer>
    <WarningTextContainer>
      *Please use the following test credit card for payment*
      <br />
      4242 4242 4242 4242 - Exp: 05/21 -CVV 123
    </WarningTextContainer>
    <StripeCheckoutButton price={total} />
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = dispatch => ({
  clearAllItems: items => dispatch(clearAllItemsFromCart(items)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
