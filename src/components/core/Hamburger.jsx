import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import noop from 'utils/noop';

function Hamburger({ active, onClick }) {
  return (
    <Styled.Hamburger active={active} onClick={onClick}>
      <span />
      <span />
      <span />
    </Styled.Hamburger>
  );
}

const Styled = {
  Hamburger: styled.button`
    background: transparent;
    border: 0;
    cursor: pointer;
    width: 3em;
    height: 2em;
    position: relative;
    margin-right: 2em;
    z-index: ${({ theme }) => theme.layers.modal + 1};
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      margin-right: 0;
    }

    & > span {
      left: 0;
      display: block;
      width: 100%;
      height: 3px;
      position: absolute;
      background: ${({ theme }) => theme.colors.white};
      border-radius: 3px;
      transition: 150ms;
      transition-delay: 0ms;

      &:first-of-type {
        top: 0%;
        ${({ active }) => active && 'top: 50%; transition-delay: 0ms'}
      }

      &:nth-of-type(2) {
        top: 50%;
      }

      &:last-of-type {
        top: 100%;
        ${({ active }) => active && 'top: 50%; transition-delay: 0ms'}
      }
    }
  `,
};

Hamburger.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
};

Hamburger.defaultProps = {
  onClick: noop,
};

export default Hamburger;
