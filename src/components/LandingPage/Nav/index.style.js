import styled, { keyframes } from "styled-components";
import Brand from "../Brand";

export const NavContainer = styled.nav`
  grid-column: 1/3;
  display: flex;
  justify-content: space-between;
  padding: 2em 0;

  & img {
    width: 2em;
    height: 2em;
  }
`;

export const NavBrand = styled(Brand)`
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Hamburger = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  width: 3em;
  height: 2em;
  z-index: 2;

  position: relative;
  @media (max-width: 768px) {
    margin-right: 2rem;
  }

  & > span {
    left: 0;
    display: block;
    width: 100%;
    height: 3px;
    position: absolute;

    background: white;
    border-radius: 3px;

    transition: 150ms;
    transition-delay: 0ms;

    &:first-of-type {
      top: 0%;
      ${(props) => props.active && "top: 50%; transition-delay: 0ms"}
    }

    &:nth-of-type(2) {
      top: 50%;
    }

    &:last-of-type {
      top: 100%;
      ${(props) => props.active && "top: 50%; transition-delay: 0ms"}
    }
  }
`;

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5em;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const NavLinks = styled.ul`
  padding: 0;
  margin: 0;
  transition: 150ms ease-out;

  opacity: 0;
  display: none;
  column-gap: 2em;

  & li a {
    cursor: pointer;
    padding: 1em;
  }

  ${(props) => props.active && "opacity: 1; display: flex;"}

  @media(max-width: 768px) {
    animation: ${fadeIn} 0.1s forwards;
    position: fixed;
    /* position: absolute; */
    left: 0;
    top: 0;
    width: 100vw;
    height: 100%;
    max-height: -webkit-fill-available;
    background: black;
    z-index: 1;

    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-size: 2.5em;
    row-gap: 1em;
  }
`;
