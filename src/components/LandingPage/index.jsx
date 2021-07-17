import { Link as ScrollLink } from "react-scroll"
import Nav from './Nav'
import Introduction from "./Introduction"
import QuickContact from "./QuickContact"
import arrowDown from './images/arrow-down.svg'
import { Container, More } from './index.style'

const LandingPage = ({ id }) => {
  return (
    <Container id={id} >
      <Nav />
      <Introduction />
      <QuickContact />
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