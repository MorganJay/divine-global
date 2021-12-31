import React from "react";
import { connect } from "react-redux";

import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

import {
  CheckoutItemContainer,
  ImageContainer,
  QuantityContainer,
  TextContainer,
  RemoveButtonContainer,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem, clearItem, removeItem, addItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>
      <TextContainer style={{ width: "25%", marginLeft: 10 }}>
        {name}
      </TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>{price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        &#10005;
      </RemoveButtonContainer>
    </CheckoutItemContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
