import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Item from './Item';

const StyledList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
  grid-gap: 1rem;
  margin-top: 2rem;
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
