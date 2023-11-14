import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import noop from 'utils/noop';

function Container({ className, children, onClick }) {
  return <Styled.Container className={className} onClick={onClick}>{children}</Styled.Container>;
}

const Styled = {
  Container: styled.div`
    padding-left: 2rem;
    padding-right: 2rem;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      max-width: 1200px;
      margin-left: auto;
      margin-right: auto;
    }
  `,
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

Container.defaultProps = {
  className: '',
  onClick: noop,
};

export default Container;
