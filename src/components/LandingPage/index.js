import { Link as ScrollLink } from "react-scroll"

import Nav from './Nav'
import Introduction from "./Introduction"

import github from '../../img/LandingPage/github.svg'
import mail from '../../img/LandingPage/mail.svg'
import arrowDown from '../../img/LandingPage/arrow-down.svg'

import { Container, QuickContact, VerticalLine, More } from './index.style'

const LandingPage = ({ id }) => {
  return (
    <Container id={id} >
      <Nav />
      <Introduction />

      <QuickContact>
        <VerticalLine />
        <li>
          <a href="https://github.com/energywraith" rel="noopener noreferrer">
            <img src={github} alt="github logo" />
          </a>
        </li>
        <li>
          <ScrollLink to="Contact" smooth={true} duration={1000} style={{ cursor: "pointer" }}>
            <img src={mail} alt="mail icon" />
          </ScrollLink>
        </li>
        <VerticalLine />
      </QuickContact>

      <More>
        <ScrollLink to="Projects" smooth={true} duration={500}>
          <img src={arrowDown} alt="arrow pointing down" />
          <span> Find out more about me </span>
        </ScrollLink>
      </More>
    </Container>
  )
}

export default LandingPage