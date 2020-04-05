import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const StyledList = styled.div`
  display: grid;
  grid-gap: 1.5rem;
`;

const List = ({ items }) => (
  <StyledList>
    {items.map((x, idx) => (
      <Item item={x} key={idx} />
    ))}
  </StyledList>
);

List.propTypes = {
  items: PropTypes.array,
};

export default List;
