import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Lists = styled.div`
  display: flex;
  column-gap: 5em;
  height: 100%;
  margin-left: 5rem;

  & > ul {
    padding: 0;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.laptopxl}px) {
    margin-left: 0.8rem;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}px) {
    margin-left: 0;
    display: grid;
    grid-auto-flow: row;
    row-gap: 2em;
    justify-content: flex-start;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    display: grid;
    text-align: center;
    grid-column: 1/3;
    margin-top: 2rem;
    justify-content: start;
    row-gap: 0;
  }
`;

export const ListHeader = styled.li`
  font-size: 1.2em;
  margin-bottom: 0.5em;

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    margin-top: 1rem;
    text-align: start;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 3rem;

  @media (max-width: ${(props) => props.theme.breakpoints.laptop}px) {
    margin: 0;
  }

  & > li:not(${ListHeader}) {
    color: ${(props) => props.theme.colors.gray};
    font-size: 1.1em;
    margin-top: 1rem;
    display: flex;
    align-items: center;

    & img {
      margin-right: 1rem;
      filter: invert(1);
      opacity: 0.8;

      width: 1.5em;
      height: 1.5em;
    }

    & > a {
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
  }
`;

export const LinkStyled = styled(Link)`
  cursor: pointer;
`;
