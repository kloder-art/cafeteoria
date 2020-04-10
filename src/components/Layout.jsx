import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './Header';
import Menu from './Menu';
import SidebarLeft from './SidebarLeft';
import SidebarRight from './SidebarRight';
import Go2Top from './Go2Top';

const StyledLayout = styled.div`
  max-width: 960px;
  margin: 0 auto 3rem;
  display: grid;
  grid-gap: 1.5rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    'header header header header header'
    'menu menu menu menu menu'
    'sidebarLeft main main main sidebarRight';
  grid-auto-flow: row dense;
  main {
    grid-area: main;
  }
`;

const Layout = ({ children }) => {
  const {
    site: { siteMetadata: meta },
  } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `);

  return (
    <StyledLayout>
      <Header title={meta.title} description={meta.description} />
      <Menu />
      <SidebarLeft />
      <main>{children}</main>
      <SidebarRight />
      <Go2Top />
    </StyledLayout>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
