import styled from "styled-components"

export const BrandContainer = styled.div`
  display: grid;
  grid-template: 1fr 1fr / auto 1fr;
  column-gap: 0.5em;
  align-items: center;
  width: 100%;

  & img {
    grid-column: 1;
    grid-row: 1/3;
    height: 100%;
    width: auto;
    border-radius: 4px;

    max-height: 2em;
  }

  & span {
    font-weight: 400;
    font-size: 0.8em;
  }
`