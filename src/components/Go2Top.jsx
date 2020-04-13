import React, { useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronUp } from 'react-icons/fa';

const StyledGo2Top = styled.a`
  line-height: 1rem;
  display: none;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  cursor: pointer;
  background: var(--text-highlight-color);
  padding: 1rem;
  text-align: center;
  font-size: 16px;
  z-index: 15;
  text-decoration: none;
  color: lightgrey;

  &:visited {
    color: lightgrey;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 1);
    color: white;
    border-bottom: 0px;
  }
`;

const fn = () => {
  const el = document.querySelector('.go2top');
  if (el.style.display === 'block') {
    if (window.scrollY < 200) {
      el.style.display = 'none';
    }
  } else {
    if (window.scrollY > 200) {
      el.style.display = 'block';
    }
  }
};

const Go2Top = () => {
  useEffect(() => {
    window.addEventListener('scroll', fn);
    return () => {
      window.removeEventListener('scroll', fn);
    };
  }, []);
  return (
    <StyledGo2Top href="#" className={'go2top'}>
      <FaChevronUp size={'25px'} />
    </StyledGo2Top>
  );
};

export default Go2Top;
