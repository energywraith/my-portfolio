import { useState } from 'react'
import { Link } from "react-scroll";
import { NavContainer, NavLinksContainer, NavLinks, Hamburger } from './Nav.style'
import Brand from "./Brand";

const Nav = () => {
  const [hamburgerState, setHamburgerState] = useState(false)
  
  const handleHamburgerClick = () => {
    if(window.innerWidth < 600) {
      if(!hamburgerState === true) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "scroll";
      }
    }
    setHamburgerState(!hamburgerState)
  }

  return (
    <NavContainer>
      <Link to="Home" smooth={true} duration={500} onClick={() => setHamburgerState(false)} style={{ cursor: "pointer" }}>
        <Brand />
      </Link>

      <NavLinksContainer>
        <NavLinks active={hamburgerState}>
          <li>
            <Link to="Projects" isDynamic={true} smooth={true} duration={500} onClick={() => {document.body.style.overflowY = "scroll"; setHamburgerState(false)}}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="Contact" isDynamic={true} smooth={true} duration={1000} onClick={() => {document.body.style.overflowY = "scroll"; setHamburgerState(false)}}>
              Contact
            </Link>
          </li>
        </NavLinks>
        
        <Hamburger active={hamburgerState} onClick={handleHamburgerClick}>
          <span /><span /><span />
        </Hamburger>
      </NavLinksContainer>
    </NavContainer>
  )
}

export default Nav