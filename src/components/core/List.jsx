import React from 'react';
import { Link } from 'react-scroll';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// eslint-disable-next-line
function LinkWrapper({ to, scrollTo, children }) {
  if (to) {
    return <a href={to} rel="noopener noreferrer">{children}</a>;
  }

  if (scrollTo) {
    return <Styled.Link to={scrollTo} smooth>{children}</Styled.Link>;
  }

  return children;
}

function List({
  header, elements, className, isVertical,
}) {
  return (
    <Styled.ListWrapper className={className}>
      <Styled.Header>{header}</Styled.Header>
      <Styled.List isVertical={isVertical}>
        {elements.map((element, index) => (
        // eslint-disable-next-line
        <Styled.Item key={index}>
          <LinkWrapper to={element.to} scrollTo={element.scrollTo}>
            {element.icon && <img src={element.icon} alt={element.label} />}
            {element.label}
          </LinkWrapper>
        </Styled.Item>
        ))}
      </Styled.List>
    </Styled.ListWrapper>
  );
}

const Styled = {
  ListWrapper: styled.div`
    display: flex;
    flex-direction: column;
  `,
  List: styled.ul`
    display: flex;
    justify-content: flex-start;
    padding: 0;
    margin: 0;

    li {
      margin-right: 10px;
    }

    ${({ isVertical }) => isVertical && css`
      flex-direction: column;

      li {
        margin-top: 16px;
      }
    `}
  `,
  Header: styled.h4`
    font-size: 1.1em;
    margin: 0;
    letter-spacing: 0.7px;
    font-weight: 500;
  `,
  Item: styled.li`
    color: ${({ theme }) => theme.colors.gray};
    font-size: 1.1em;
    display: flex;
    align-items: center;
    height: 1.25em;

    & img {
      margin-right: 1rem;
      filter: invert(1);
      opacity: 0.8;
      width: 1.25em;
      height: 1.25em;
    }

    & a {
      display: flex;
      align-items: center;
      color: ${(props) => props.theme.colors.gray};

      &:hover {
        color: ${(props) => props.theme.colors.white};

        & img {
          opacity: 1;
        }
      }
    }
  `,
  Link: styled(Link)`
    cursor: pointer;
  `,
};

List.propTypes = {
  header: PropTypes.string,
  elements: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    icon: PropTypes.node,
    to: PropTypes.string,
    scrollTo: PropTypes.string,
  })).isRequired,
  className: PropTypes.string,
  isVertical: PropTypes.bool,
};

List.defaultProps = {
  header: '',
  className: '',
  isVertical: false,
};

export default List;
