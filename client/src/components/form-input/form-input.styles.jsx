import styled, { css } from "styled-components";
import { white, subColor, mainColor } from "../../variables.styles";

const shrinkLabelStyles = css`
  transform: translateY(-30px) translateX(-5px);
  font-size: 14px;
  color: ${mainColor};
`;

export const FormGroup = styled.div`
  position: relative;
  margin: 45px 0;

  input[type="password"] {
    letter-spacing: 0.3em;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: ${white};
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &::placeholder {
    opacity: 0;
  }

  &:focus,
  &:valid {
    ~ label {
      ${shrinkLabelStyles}
    }
  }
`;

export const Label = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  ${props => props.shrink && shrinkLabelStyles}
`;
