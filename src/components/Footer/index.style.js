import styled from "styled-components"
import { Link } from 'react-scroll'
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
  }
`

export const FooterBrand = styled(Brand)`
  font-size: 1.3em;
  padding: 0 3em;
  width: auto;

  @media(max-width: 600px) {
    padding: 0 2em;
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

export const Lists = styled.div`
  display: flex;
  column-gap: 5em;
  justify-content: center;

  @media(max-width: 600px) {
    flex-direction: column;
  }
`

export const ListHeader = styled.li`
  font-weight: 600;
  font-size: 1.1em;
  margin-bottom: 0.5em;
  letter-spacing: 1px;
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 0.5em;

  & > li:not(${ListHeader}) {
    color: #b3b3b3;

    & > a {
      color: #b3b3b3;

      &:hover {
        color: white;
      }
    }
  }
`

export const LinkStyled = styled(Link)`
  cursor: pointer;
`