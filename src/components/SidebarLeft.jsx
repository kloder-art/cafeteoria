import React from 'react';
import styled from 'styled-components';

import Categories from './sidebar/Categories';
import Text from './sidebar/Text';

const StyledSidebarLeft = styled.nav`
  grid-area: sidebarLeft;
  display: grid;
  grid-gap: 1.5rem;
  height: min-content;
`;

const SidebarLeft = () => (
  <StyledSidebarLeft>
    <Categories />
    <Text />
  </StyledSidebarLeft>
);

export default SidebarLeft;
