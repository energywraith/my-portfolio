import styled from "styled-components"
import Brand from '../LandingPage/Brand'

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  align-items: center;
  justify-content: center;
  row-gap: 2em;
  padding-top: 2em;
  color: white;

  @media(max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    row-gap: 0.5em;
  }
`

export const FooterBrand = styled(Brand)`
  font-size: 1.3em;
  padding: 0 3em;
  width: auto;
  
  @media(max-width: 600px) {
    display: none;
  }
`

export const Copyright = styled.span`
  grid-row: 2;
  grid-column: 1/3;
  text-align: center;
  padding: 1em 0;
  width: 100%;
  border-top: 1px solid #242424;
  font-size: 0.9em;

  @media(max-width: 600px) {
    grid-row: 3;
    grid-column: 1;
  }
`

