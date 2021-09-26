import styled from "styled-components";
import { Link } from "react-scroll";

export const Lists = styled.div`
  display: flex;
  column-gap: 5em;
  height: 100%;
  margin-left: 5rem;

  & > ul {
    padding: 0;
  }

  @media (max-width: 1440px) {
    margin-left: 0.8rem;
  }

  @media (max-width: 1200px) {
    margin-left: 0;
    margin-top: 2rem;
  }

  @media (max-width: 600px) {
    display: grid;
    text-align: center;
  }
`;

export const ListHeader = styled.li`
  font-size: 1.2em;
  margin-bottom: 0.5em;

  @media (max-width: 600px) {
    margin-top: 1rem;
    text-align: start;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-left: 3rem;

  @media (max-width: 1200px) {
    margin: 0;
  }

  & > li:not(${ListHeader}) {
    color: #b3b3b3;
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
      color: #b3b3b3;

      &:hover {
        color: white;

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
