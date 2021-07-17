import styled, { keyframes } from "styled-components"

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const ProjectsListContainer = styled.ul`
  margin-top: 2em;
  display: grid;
  grid-template-columns: auto;
  padding-left: 10em;
  row-gap: 2em;
  width: fit-content;
  height: 100%;

  opacity: 0;
  transition: opacity 500ms;
  transition-delay: 800ms;
  ${props => props.triggeredInView && 'opacity: 1;'};


  @media(max-width: 1000px) {
    padding-left: 0;
    padding: 1em;
    box-sizing: border-box;
    margin-top: 1em;
    justify-content: center;
    width: 100%;
  }
`