import styled from "styled-components";
import { breakpointLg, breakpointXl, subColor } from "../../variables.styles";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  max-width: fit-content;
  cursor: pointer;
  &:hover {
    color: ${subColor};
  }
`;

export const PreviewContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  grid-gap: 40px;

  @media (min-width: ${breakpointLg}px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }

  @media (min-width: ${breakpointXl}px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;
