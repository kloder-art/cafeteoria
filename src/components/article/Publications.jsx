import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPublications = styled.ul``;

const Publications = ({ items }) => (
  <StyledPublications>
    {items.map((x, idx) => (
      <li key={idx}>
        <em>
          Articulo publicado anteriormente el {x.date} en la {x.type}{' '}
          <a href={x.url} target={'_blank'} rel={'noopener noreferrer'}>
            {x.title}
          </a>
          . Si quieres compartir su contenido, por favor, hazlo desde su
          emplazamiento original.
        </em>
      </li>
    ))}
  </StyledPublications>
);

Publications.propTypes = {
  items: PropTypes.array,
};

export default Publications;
