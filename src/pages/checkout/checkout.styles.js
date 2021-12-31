import styled from "styled-components";

import { breakpointMd } from "../../variables.styles";

export const CheckoutPageContainer = styled.div`
  width: 90%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0px;
  padding: 4rem 0;

  button {
    margin: 50px 0 0 auto;
  }

  @media (min-width: ${breakpointMd}px) {
    width: 55%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlock = styled.div`
  &:nth-child(2) {
    margin-left: 25px;
  }

  &:nth-child(3) {
    margin-left: 10px;
  }

  &:nth-child(4) {
    margin-right: 7px;
  }
  @media (min-width: ${breakpointMd}) {
    &:nth-child(2) {
      margin-left: 5px;
    }
    &:last-child {
      margin-right: 5px;
    }
  }
`;

export const RemoveItemContainer = styled(HeaderBlock)`
  cursor: pointer;
  user-select: none;

  &:active {
    color: red;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const WarningTextContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
`;
