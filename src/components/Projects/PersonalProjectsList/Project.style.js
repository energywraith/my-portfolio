import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const ProjectContainer = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 1em;
  padding: 1em 0;
  border-radius: 4px;

  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;
  animation-delay: 1.5s;

  & > p {
    font-size: 0.8em;
    margin: 0;
  }

  @media (max-width: 768px) {
    padding-left: 1rem;
  }
`;

export const ProjectName = styled.h4`
  margin: 0;
  font-size: 3em;

  @media (max-width: 768px) {
    font-size: 2em;
  }
`;

export const ProjectTechnologiesList = styled.ul`
  padding: 0;
  display: flex;
  column-gap: 2em;
  letter-spacing: 1px;
  margin-bottom: 1em;
  text-transform: uppercase;
  font-size: 0.8em;
  flex-wrap: wrap;
  row-gap: 1em;
`;

export const ProjectDescription = styled.span`
  max-width: 65ch;
  line-height: 2em;
  font-weight: 100;
`;

export const ProjectLinks = styled.ul`
  margin-top: 1.5em;
  padding: 0;
  display: flex;
  column-gap: 1em;
  text-transform: uppercase;

  & li a {
    color: #add8e6;
    font-size: 1.15em;
    letter-spacing: 1px;
    cursor: pointer;

    &:hover {
      color: #72bcd4;
    }
  }
`;
