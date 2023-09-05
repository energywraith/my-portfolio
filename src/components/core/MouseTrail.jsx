import React, { useRef } from 'react';
import styled from 'styled-components';
import useMouseTrail from 'hooks/useMouseTrail';

function MouseTrail() {
  const containerRef = useRef(null);
  useMouseTrail(containerRef);

  return <Styled.Trail ref={containerRef} />;
}

const Styled = {
  Trail: styled.svg`
    display: none;

    @media (hover: hover) {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      pointer-events: none;
      z-index: ${({ theme }) => theme.layers.mouseTrail};
    }
  `,
};

export default MouseTrail;
