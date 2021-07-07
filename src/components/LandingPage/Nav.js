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
        document.body.style.touchAction = "none";
      } else {
        document.body.style.overflowY = "scroll";
        document.body.style.touchAction = "auto";
      }
    }
    setHamburgerState(!hamburgerState)
  }

  return (
    <NavContainer>
      <Link to="Home" smooth={true} duration={500} style={{ cursor: "pointer" }}>
        <Brand />
      </Link>

      <NavLinksContainer>
        <NavLinks active={hamburgerState}>
          <li>
            <Link to="Projects" isDynamic={true} smooth={true} duration={500} onClick={handleHamburgerClick}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="Contact" isDynamic={true} smooth={true} duration={1000} onClick={handleHamburgerClick}>
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