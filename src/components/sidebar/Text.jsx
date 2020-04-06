import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledText = styled.div`
  font-family: 'Abel', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  p {
    margin: 0;
  }
`;

const Text = () => (
  <StyledText>
    <p>
      Un lugar en el que darle vueltas al de dónde venimos y a dónde vamos, a
      través de cuestiones como las{' '}
      <Link to={'/articles/el-momento-social-volvio'}>redes sociales</Link>, el{' '}
      <Link to={'/articles/inocentes-por-culpables'}>cine de Hitchcock</Link> o
      la <Link to={'/articles/la-mano-dura'}>prensa rosa</Link>. Es probable que
      quieras <Link to={'/sobre-mi'}>saber más de mí</Link> o, si no, pasar a
      vagar por este mundo extraño.
    </p>
  </StyledText>
);

export default Text;
