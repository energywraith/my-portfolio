import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Container from 'components/core/Container';

const CardList = React.forwardRef(({ inView, items, renderComponent }, ref) => (
  <Container>
    <Styled.List triggeredInView={inView} ref={ref}>
      {items.map(renderComponent)}
    </Styled.List>
  </Container>
));

const Styled = {
  List: styled.ul`
    display:flex;
    flex-direction: column;
    height: 100%;
    padding: 0;
    opacity: 0;
    transition: opacity 500ms;
    transition-delay: 800ms;
    width: 100%;
    box-sizing: border-box;
    margin: 2rem 0 1rem 0;
    gap: 1rem;

    ${({ triggeredInView }) => triggeredInView && css`
      opacity: 1;
    `};

    @media (min-width: ${({ theme }) => theme.breakpoints.laptop}px) {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  `,
};

CardList.propTypes = {
  inView: PropTypes.bool.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  renderComponent: PropTypes.func.isRequired,
};

export default CardList;
