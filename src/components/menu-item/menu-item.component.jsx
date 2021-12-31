import React from "react";
import { withRouter } from "react-router-dom";
import {
  MenuItemContainer,
  Title,
  BackgroundImage,
  Subtitle,
  Content,
} from "./menu-item.styles";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImage imageUrl={imageUrl} />
    <Content>
      <Title>{title}</Title>
      <Subtitle>SHOP NOW</Subtitle>
    </Content>
  </MenuItemContainer>
);

export default withRouter(MenuItem);
