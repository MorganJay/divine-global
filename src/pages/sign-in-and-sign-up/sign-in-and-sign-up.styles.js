import styled from "styled-components";

import {
  breakpointSm,
  breakpointXl,
  breakpointMd,
} from "../../variables.styles";

export const SignInAndSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px auto 0;

  @media (min-width: ${breakpointSm}px) {
    > * {
      flex: 0 1 430px;
      margin: 1em 3em;
    }
  }

  @media (min-width: ${breakpointMd}px) {
    flex-direction: row;
  }

  @media (min-width: ${breakpointXl}px) {
    margin-top: 70px;
  }
`;
