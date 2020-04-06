import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaTags } from 'react-icons/fa';

const StyleTags = styled.div`
  color: lightgrey;
`;

const Tags = ({ tags }) => (
  <StyleTags>
    <FaTags />{' '}
    {tags.map((x, idx) => (
      <span key={idx}>
        <Link to={`/tag/${x}`}>{x}</Link>
        {idx < tags.length - 1 && ', '}
      </span>
    ))}
  </StyleTags>
);

Tags.propTypes = {
  tags: PropTypes.array,
};

export default Tags;
