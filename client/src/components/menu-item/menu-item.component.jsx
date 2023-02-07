import React from 'react';

import WithRouter from './../with-router/with-router.component';

import {
  MenuItemContainer,
  Title,
  BackgroundImage,
  Subtitle,
  Content,
} from './menu-item.styles';

const MenuItem = ({ title, imageUrl, size, linkUrl, router }) => (
  <MenuItemContainer size={size} to={`${router.location.pathname}${linkUrl}`}>
    <BackgroundImage imageUrl={imageUrl} />
    <Content>
      <Title>{title}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </Content>
  </MenuItemContainer>
);

export default WithRouter(MenuItem);
