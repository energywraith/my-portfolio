import styled from "styled-components"
import { Link } from 'react-scroll'

export const Lists = styled.div`
  display: flex;
  column-gap: 5em;
  justify-content: center;

  @media(max-width: 600px) {
    display: grid;
    text-align: center;

    & > ul {
      padding: 0;
    }
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