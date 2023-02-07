import React from 'react';

import {
  CartItemContainer,
  ItemDetailsContainer,
  CartItemImage,
} from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <CartItemContainer>
    <CartItemImage src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span>{name}</span>
      <span>
        {quantity} x &#x24;{price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);

export default CartItem;
