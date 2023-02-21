import React from 'react';
import styled from 'styled-components';
import Animations from 'utils/Animations';
import PropTypes from 'prop-types';

function Loader({ size, className }) {
  return (
    <Styled.Loader size={size} className={className}>
      <div />
      <div />
      <div />
      <div />
    </Styled.Loader>
  );
}

const Styled = {
  Loader: styled.div`
    display: inline-block;
    position: relative;
    width: ${({ size }) => `${size}px`};
    height: ${({ size }) => `${size}px`};

    & > div {
      box-sizing: border-box;
      display: block;
      position: absolute;
      width: ${({ size }) => `${size}px`};
      height: ${({ size }) => `${size}px`};
      border: 2px solid ${({ theme }) => theme.colors.white};
      border-radius: 100%;
      animation: ${Animations.loader} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
      border-color: ${({ theme }) => theme.colors.white} transparent transparent transparent;

      &:nth-child(1) {
        animation-delay: -0.45s;
      }
      &:nth-child(2) {
        animation-delay: -0.3s;
      }
      &:nth-child(3) {
        animation-delay: -0.15s;
      }
    }
  `,
};

Loader.propTypes = {
  size: PropTypes.number,
  className: PropTypes.string,
};

Loader.defaultProps = {
  size: 20,
  className: '',
};

export default Loader;
