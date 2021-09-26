import styled from "styled-components";
import Brand from "../LandingPage/Brand";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr auto;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  row-gap: 2rem;
  padding-top: 4rem;

  padding-left: 2rem;
  padding-right: 2rem;

  color: white;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    justify-content: center;
    row-gap: 0.5em;
  }
`;

export const About = styled.div`
  @media (max-width: 1200px) {
    grid-column: 1/3;
  }

  & > h3 {
    font-size: 2.5em;
    margin: 0;
    letter-spacing: 1px;
  }

  & > p {
    max-width: 60ch;
    line-height: 1.5rem;
    margin: 0;
    margin-top: 2rem;
    opacity: 0.9;

    @media (max-width: 600px) {
      max-width: none;
    }
  }

  & > span {
    display: block;
    margin-top: 1rem;
    text-shadow: 0 0px 2px white;
  }
`;

export const FooterBrand = styled(Brand)`
  font-size: 1.3em;
  padding: 0 4rem;
  width: auto;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Copyright = styled.span`
  grid-row: 3;
  grid-column: 1/3;
  padding-top: 1rem;
  padding-bottom: 2rem;
  font-size: 0.9em;
  opacity: 0.8;

  @media (max-width: 1200px) {
    margin-top: 1rem;
  }

  @media (max-width: 600px) {
    grid-row: 3;
    grid-column: 1/3;
    margin-top: 2rem;
    text-align: center;
    width: 100%;
  }
`;
