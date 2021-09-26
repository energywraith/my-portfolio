import styled from "styled-components";

export const Header = styled.h3`
  margin: 0;
  font-weight: 400;
  width: fit-content;
  color: white;
  font-size: 3em;
  margin-top: 1em;

  & div {
    background: linear-gradient(0deg, white, white) bottom center no-repeat;
    background-size: 0px 3px;
    transition: background-size 500ms;
    background-position: right bottom;
    padding-bottom: 0.1em;
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
    font-size: 1.8em;
  }
`;
