import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { createStructuredSelector } from 'reselect';

import { selectDirectorySections } from '../../redux/directory/directory.selectors';

import MenuItem from '../menu-item/menu-item.component';

const DirectoryMenuContainer = styled.div`
  min-width: 85vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 5rem;
`;

const Directory = ({ sections }) => (
  <DirectoryMenuContainer>
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </DirectoryMenuContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
