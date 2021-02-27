import styled, { css } from 'styled-components';
import { ReactComponent as Bag } from '../../assets/img/shopping-bag.svg';

const focusStateStyles = css`
  transform: scaleX(1);
  width: 70%;
  opacity: 1;
`;

const hideFocusStyles = props => {
  if (!props.hidden)
    return css`
      opacity: 0;
    `;
  return null;
};

export const CartContainer = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  position: relative;
  transition: all 250ms ease-in-out;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0.4em;
    right: 0.8em;
    height: 2px;
    opacity: 0;
    background-color: orange;
    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }

  &:hover,
  &:focus {
    color: orange;
    outline: none;
    &::after {
      ${focusStateStyles}
      ${hideFocusStyles}
    }
  }
`;

export const ShoppingIcon = styled(Bag)`
  width: 24px;
  height: 24px;
`;

export const ItemCountContainer = styled.span`
  position: absolute;
  font-size: 13px;
  font-weight: bold;
  bottom: 12px;
`;
