import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import logo from '../images/logo.png';

const StyledTitle = styled.div`
  display: inline-block;
  a {
    display: grid;
    grid-gap: 0rem;
    grid-template-columns: 72px auto;
    border-bottom: 0px;
    img {
      grid-row-start: 1;
      grid-row-end: 3;
      margin-bottom: 0;
    }
    h1 {
      margin: 0;
      color: var(--text-color);
    }
    h2 {
      margin: 0;
      font-size: 1rem;
      color: var(--text-light-color);
      text-transform: none;
    }
  }
`;

const Title = ({ title, description }) => (
  <StyledTitle>
    <Link to={'/'}>
      <img src={logo} alt={'Logo'} />
      <h1>{title}</h1>
      <h2>{description}</h2>
    </Link>
  </StyledTitle>
);

Title.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Title;
