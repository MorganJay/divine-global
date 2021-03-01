import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

import CollectionPage from '../collection/collection.component';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';

const ShopPageContainer = styled.div`
  padding: 7rem 2rem 1rem;
`;

const ShopPage = ({ match }) => (
  <ShopPageContainer>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </ShopPageContainer>
);

export default ShopPage;
