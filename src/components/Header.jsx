import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Title from './Title';

const StyledHeader = styled.header`
  margin: 0;
  padding: 1.5rem 0 0;
  grid-area: header;
`;

const Header = ({ title, description }) => (
  <StyledHeader>
    <Title title={title} description={description} />
  </StyledHeader>
);

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

Header.defaultProps = {
  title: '',
  description: '',
};

export default Header;
