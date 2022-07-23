import styled, { keyframes } from 'styled-components';

const hide = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

export const Header = styled.h3`
  margin: 0;
  font-weight: 400;
  width: fit-content;
  color: ${(props) => props.theme.colors.white};
  font-size: 3em;
  margin-top: 1em;

  .Typewriter__cursor {
    position: absolute;
    
    &.hide-cursor {
      animation: ${hide} 0.6s forwards;
      animation-iteration-count: 1;
    }
  }

  & div {
    background: linear-gradient(
      0deg,
      ${(props) => props.theme.colors.white},
      ${(props) => props.theme.colors.white}
    ) bottom center no-repeat;
    background-size: 0px 3px;
    transition: background-size 500ms;
    background-position: right bottom;
    padding-bottom: 0.1em;

    &.show-background {
      background-size: 100% 3px;
    }
  }

  @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
    padding-left: 1rem;
    font-size: 1.8em;
  }
`;
