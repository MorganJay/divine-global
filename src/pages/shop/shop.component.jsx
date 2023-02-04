import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Route, Routes } from 'react-router-dom';

import CollectionPageContainer from './../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';

import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPageContainer = styled.div`
  padding: 7rem 2rem 1rem;
`;

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    return (
      <ShopPageContainer>
        <Routes>
          <Route
            path="/"
            element={<CollectionsOverviewContainer />}
          />
          <Route
            path="/:collectionId"
            element={<CollectionPageContainer />}
          />
        </Routes>
      </ShopPageContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
