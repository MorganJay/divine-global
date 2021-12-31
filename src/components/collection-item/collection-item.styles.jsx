import styled from "styled-components";
import Button from "../button/button.component";

export const CollectionItemContainer = styled.div`
  height: 400px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    div:first-child {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-evenly;
  font-size: 18px;
  align-items: baseline;
`;

export const NameContainer = styled.span`
  width: 75%;
  margin-bottom: 15px;
`;

export const PriceContainer = styled.span``;

export const AddButton = styled(Button)`
  width: 70%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  text-transform: uppercase;
`;
