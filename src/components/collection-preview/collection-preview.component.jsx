import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import WithRouter from '../with-router/with-router.component';

import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from './collection-preview.styles';

const CollectionPreview = ({ title, items, routeName, router }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => router.navigate(`/shop/${routeName}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((_, index) => index < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

export default WithRouter(CollectionPreview);
