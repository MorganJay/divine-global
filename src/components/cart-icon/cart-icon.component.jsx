import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {
  selectCartItemsCount,
  selectCartHidden
} from '../../redux/cart/cart.selectors';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer
} from './cart-icon.styles';

const CartIcon = ({ toggleCartHidden, itemCount, hidden }) => {
  const handleEnterKeyDown = event => {
    if (event.key === 'Enter') toggleCartHidden();
  };

  const handleMouseOver = event => {
    console.log(event);
  };

  return (
    <CartContainer
      tabIndex="0"
      hidden={hidden}
      onClick={toggleCartHidden}
      onKeyDown={e => handleEnterKeyDown(e)}
    >
      <ShoppingIcon />
      <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

// Selector in Redux
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
