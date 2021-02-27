import styled, { css } from 'styled-components';

const buttonStyles = css`
  background-color: black;
  color: white;
  border: 1px solid black;
  flex-grow: 0;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const invertedButtonStyles = css`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

const googleSignInStyles = css`
  background-color: #4285f4;
  color: white;
  border: none;

  &:hover {
    background-color: #357ae8;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) return googleSignInStyles;
  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const ButtonContainer = styled.button`
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  font-weight: bolder;
  cursor: pointer;
  height: 52px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  ${getButtonStyles}
`;
