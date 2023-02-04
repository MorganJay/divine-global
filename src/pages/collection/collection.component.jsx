import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';
import { CollectionPageContainer, ItemsContainer } from './collection.styles';

const CollectionPage = ({ collection, ...props }) => {
  if (!collection) {
    return <h1>No products found for {props.router.params.collectionId}</h1>;
  }

  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <h2>{title}</h2>
      <ItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </ItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.router.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
