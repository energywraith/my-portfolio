import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Container({ className, children }) {
  return <Styled.Container className={className}>{children}</Styled.Container>;
}

const Styled = {
  Container: styled.div`
    padding-left: 2rem;
    padding-right: 2rem;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      max-width: 1600px;
      margin-left: auto;
      margin-right: auto;
    }
  `,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Container.defaultProps = {
  className: '',
};

export default Container;
