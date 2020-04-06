import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyleMetadata = styled.div`
  color: lightgrey;
`;

const Metadata = ({ frontmatter: { date, categories } }) => (
  <StyleMetadata>
    Publicado el {date} en la{categories.length > 1 ? 's' : ''} categoría
    {categories.length > 1 ? 's ' : ' '}
    {categories.map((x, idx) => (
      <span key={idx}>
        <Link to={`/category/${x}`}>{x}</Link>
        {idx < categories.length - 1 && ', '}
      </span>
    ))}
  </StyleMetadata>
);

Metadata.propTypes = {
  frontmatter: PropTypes.shape({
    date: PropTypes.string,
    categories: PropTypes.array,
  }),
};

export default Metadata;
