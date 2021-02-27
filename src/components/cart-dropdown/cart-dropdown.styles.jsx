import styled from 'styled-components';
import Button from '../button/button.component';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 250px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const CartDropdownButton = styled(Button)`
  margin-top: auto;
`;

export const EmptyMessageContainer = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  margin-bottom: 15px;

  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    width: 7px;
    border-radius: 15px;
    transition: all 5s;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    cursor: pointer;
  }

  &::-webkit-scrollbar-track {
    border-radius: 15px;
  }

  &:hover {
    transition: all 5s;
    &::-webkit-scrollbar-thumb {
      transition: all 5s;
      background: rgb(145, 144, 144);
    }
  }
`;
