import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

function Card({ variant, children, className }) {
  return (
    <Styled.Card variant={variant} className={className}>{children}</Styled.Card>
  );
}

const Styled = {
  Card: styled.article`
    border: 1px solid #1d1d1d;
    border-radius: 6px;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;

    ${(props) => props.variant === 'solid' && css`
      background: #0f1012;
    `}

    ${(props) => props.variant === 'ghost' && css`
      
    `}
  `,
};

Card.propTypes = {
  variant: PropTypes.oneOf(['solid', 'ghost']),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Card.defaultProps = {
  variant: 'solid',
  className: '',
};

export default Card;
