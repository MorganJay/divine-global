import styled from "styled-components";

import { breakpointMd } from "../../variables.styles";

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6.5em;

  span {
    color: grey;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 52px;
  gap: 1em;

  @media (min-width: ${breakpointMd}px) {
    height: auto;
  }
`;
