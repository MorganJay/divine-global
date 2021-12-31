import styled from "styled-components";

import { breakpointLg } from "./../../variables.styles";

export const MenuItemContainer = styled.div`
  height: ${({ size }) => (size ? "380px" : "240px")};
  min-width: 300px;
  height: 250px;
  display: flex;
  flex: 1 1 32%;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  position: relative;
  transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  @media (min-width: ${breakpointLg}px) {
    height: 380px;
  }

  &:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  }

  &:hover {
    cursor: pointer;

    div:first-child {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    div:last-child {
      opacity: 0.9;
    }
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  filter: brightness(75%) contrast(115%);
  transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Content = styled.div`
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  text-align: center;
  width: 70%;
`;

export const Title = styled.h1`
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 22px;
  color: #4a4a4a;
`;

export const Subtitle = styled.span`
  font-size: 15px;
`;
