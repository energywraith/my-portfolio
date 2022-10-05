import React from 'react';
import styled from 'styled-components';

function Line() {
  return <Styled.Line />;
}

const Styled = {
  Line: styled.hr`
    border: 1px solid rgba(${({ theme }) => theme.colors.white}, 0.5);
    height: 10vh;
  `,
};

export default Line;
