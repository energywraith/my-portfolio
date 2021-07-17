import styled from "styled-components"

export const CarouselProjectCover = styled.img`
  transition: 200ms filter linear, 200ms -webkit-filter linear;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.5);
`

export const CarouselProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  height: 8em;
  letter-spacing: 2px;
  box-shadow: 0px 0px 2px #b3b3b3;
  row-gap: 0.2em;
  cursor: pointer;
  text-align: center;

  & > h4, & > h5 {
    margin: 0;
  }

  & > h5 {
    font-size: 0.4em;
    font-weight: 100;
  }

  &:hover ${CarouselProjectCover} {
    filter: brightness(1)
  }
`