import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  position: fixed;
  z-index: 7;
  top: 0;
  background-color: white;
  padding: 10px 60px;
  box-shadow: 0px 20px 0px 0px white;
`;

export const LogoContainer = styled(Link)`
  max-width: 100%;
  margin-left: -25px;
`;

export const OptionsContainer = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: auto 20px;
  user-select: none;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  --spacing: 0.8em;
  position: relative;
  transition: color 150ms ease-in-out;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: var(---spacing);
    right: var(--spacing);
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
      transform: scaleX(1);
      width: 70%;
      opacity: 1;
    }
  }
`;
