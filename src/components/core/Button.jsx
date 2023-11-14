import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Button({ type = 'button', className, children }) {
  return (
    // eslint-disable-next-line react/button-has-type
    <Styled.Button type={type} className={className}>
      {children}
    </Styled.Button>
  );
}

const Styled = {
  Button: styled.button`
    background: #212327;
    border: 1px solid #383838;
    border-radius: 6px;
    padding: 0.5rem;
    font-size: 0.8rem;
    font-family: 'Poppins';
    color: white;
    cursor: pointer;

    &:hover {
      border-color: #666;
    }
  `,
};

Button.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  className: '',
  type: 'button',
};

export default Button;
