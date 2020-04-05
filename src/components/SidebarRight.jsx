import React from 'react';
import styled from 'styled-components';

import Tags from './sidebar/Tags';
import Video from './sidebar/Video';

const StyledSidebarRight = styled.div`
  grid-area: sidebarRight;
  display: grid;
  grid-gap: 1.5rem;
  height: min-content;
`;

const SidebarRight = () => (
  <StyledSidebarRight>
    <Tags />
    <Video />
  </StyledSidebarRight>
);

export default SidebarRight;
