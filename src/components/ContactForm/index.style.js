import styled from "styled-components"
import backgroundImage from '../../img/ContactForm/bg-resized.webp'

export const ContactFormContainer = styled.section`
  position: relative;
  min-height: 30em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1em;
  padding: 5em 0;
  color: white;
  
  overflow: hidden;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${backgroundImage}) center center no-repeat;
    background-size: cover;
    filter: brightness(0.2) blur(4px);
    transform: scale(1.1);

    @media(max-width: 600px) {
      filter: brightness(0.4) blur(4px);
    }
  }

  & h3 {
    margin: 0;
    font-size: 2em;
    text-align: center;
  }

  & h4 {
    margin: 0;
    font-size: 1em;
    font-weight: 400;
    text-align: center;
  }

  @media(max-width: 600px) {
    padding: 2em 1em;

    & form {
      width: 100%;
      padding: 1em;
      box-sizing: border-box;

      & div {
        padding-right: 1em;

        & textarea {
          max-width: 100%;
        }
      }
    }
  }
`

export const SuccessInformation = styled.span`
  color: green;
  text-align: center;
`