import styled, { keyframes } from "styled-components"

export const ProjectsContainer = styled.section`
  width: 100%;
  padding: 2em 0 2em 0;
  color: white;
`

export const ProjectsList = styled.ul`
  margin-top: 3em;
  display: grid;
  grid-template-columns: auto;
  padding-left: 15em;
  row-gap: 2em;
  width: fit-content;
  height: 100%;

  @media(max-width: 1000px) {
    padding-left: 0;
    padding: 1em;
    box-sizing: border-box;
    margin-top: 1em;
    justify-content: center;
    width: 100%;
  }
`

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Project = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  padding: 1em;
  transition: 0.5s;
  border-radius: 4px;
  
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;
  animation-delay: 1.5s;

  /* &:hover {
    background: #141414;
  } */

  & h4 {
    margin: 0;
    font-size: 3em;
  }
  
  & ul {
    padding: 0;
    display: flex;
    column-gap: 2em;
    letter-spacing: 1px;
    margin-bottom: 1em;
    text-transform: uppercase;
    font-size: 0.8em;
    flex-wrap: wrap;
    row-gap: 1em;
  }

  & span {
    max-width: 65ch;
    line-height: 2em;
    font-weight: 100;
  }

  & > p {
    font-size: 0.8em;
    margin: 0;
  }
`

export const ProjectLinks = styled.ul`
  margin-top: 1.5em;

  & li a {
    color: #add8e6;
    font-size: 1.5em;
    cursor: pointer;

    &:hover {
      color: #72bcd4;
    }
  }
`