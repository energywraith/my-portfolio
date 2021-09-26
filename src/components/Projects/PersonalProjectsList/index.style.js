import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ProjectsListContainer = styled.ul`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: auto;
  row-gap: 2em;
  width: fit-content;
  height: 100%;
  padding: 0;
  padding-left: 2rem;

  opacity: 0;
  transition: opacity 500ms;
  transition-delay: 800ms;
  ${(props) => props.triggeredInView && "opacity: 1;"};

  @media (max-width: 768px) {
    padding: 0em;
    box-sizing: border-box;
    margin-top: 1em;
    justify-content: center;
    width: 100%;
  }
`;
