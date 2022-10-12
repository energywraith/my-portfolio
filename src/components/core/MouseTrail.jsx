import React, { useRef } from 'react';
import useMouseTrail from 'hooks/useMouseTrail';
import styled from 'styled-components';

function MouseTrail() {
  const containerRef = useRef(null);
  useMouseTrail(containerRef);

  return <Styled.Trail ref={containerRef} />;
}

const Styled = {
  Trail: styled.svg`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;
    z-index: ${({ theme }) => theme.layers.mouseTrail};
  `,
};

export default MouseTrail;
