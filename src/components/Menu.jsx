import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const links = [
  { title: 'barra', to: '/' },
  { title: 'café y teoría', to: '/cafe-y-teoria' },
  { title: 'sobre mí', to: '/sobre-mi' },
  { title: 'coge una taza', to: '/coge-una-taza' },
];

const StyledMenu = styled.nav`
  font-family: 'Abel', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 1rem;
  grid-area: menu;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    li {
      list-style: none;
      a {
        padding: 0.5rem 1.3rem 0.5rem 0;
        border-bottom: 0px;
      }
      span {
        color: #bbb;
      }
      padding-right: 1rem;
    }
  }
`;

const Menu = () => (
  <StyledMenu>
    <ul>
      {links.map((x, idx) => (
        <li key={idx}>
          <Link to={x.to}>{x.title}</Link>
          {idx < links.length - 1 && <span>/</span>}
        </li>
      ))}
    </ul>
  </StyledMenu>
);

export default Menu;
