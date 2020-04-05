import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const links = [
  { title: 'Realidad', to: '/' },
  { title: 'Ficción', to: '/' },
  { title: 'Publicados', to: '/' },
  { title: 'Firmas Invitadas', to: '/' },
];

const StyledSidebarLeft = styled.nav`
  font-family: 'Abel', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  grid-area: sidebarLeft;
  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    li {
      list-style: none;
      text-transform: uppercase;
      a {
        display: block;
        background: var(--text-highlight-color);
        padding: 0.5rem 1rem;
        border-bottom: 1px solid var(--text-color);
        color: lightgrey;
        &:hover {
          color: white;
        }
      }
    }
  }
`;

const SidebarLeft = () => (
  <StyledSidebarLeft>
    <ul>
      {links.map((x, idx) => (
        <li key={idx}>
          <Link to={x.to}>{x.title}</Link>
        </li>
      ))}
    </ul>
    <p>
      Un lugar en el que darle vueltas al de dónde venimos y a dónde vamos, a
      través de cuestiones como las{' '}
      <Link to={'/articles/el-momento-social-volvio'}>redes sociales</Link>, el{' '}
      <Link to={'/articles/inocentes-por-culpables'}>cine de Hitchcock</Link> o
      la <Link to={'/articles/la-mano-dura'}>prensa rosa</Link>. Es probable que
      quieras <Link to={'/sobre-mi'}>saber más de mí</Link> o, si no, pasar a
      vagar por este mundo extraño.
    </p>
  </StyledSidebarLeft>
);

export default SidebarLeft;
