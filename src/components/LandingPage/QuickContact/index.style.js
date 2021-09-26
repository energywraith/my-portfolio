import styled from "styled-components";

export const QuickContactList = styled.ul`
  padding-bottom: 5rem;
  grid-column: 2;
  grid-row: 2/4;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 1em;

  & li a {
    display: inline-block;
    padding: 1em;
    width: 2em;
    height: 2em;

    &:hover img {
      filter: invert(1) brightness(1);
    }
  }

  & img {
    filter: invert(1) brightness(0.8);
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const VerticalLine = styled.hr`
  border: 1px solid rgba(255, 255, 255, 0.5);
  height: 10vh;
`;
