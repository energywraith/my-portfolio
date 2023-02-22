import React from 'react';
import styled from 'styled-components';

function Line() {
  return <Styled.Line />;
}

const Styled = {
  Line: styled.hr`
    border: 1px solid ${({ theme }) => theme.colors.lightGray};
    height: 10vh;
  `,
};

export default Line;
