import styled from "styled-components";

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 38px;
    margin: 0 auto 30px;
  }
`;

export const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;

  & .collection-item {
    margin-bottom: 30px;
  }
`;
