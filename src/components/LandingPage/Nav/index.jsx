import React, { useState } from 'react';
import { Link } from 'react-scroll';
import {
  NavContainer,
  NavBrand,
  NavLinksContainer,
  NavLinks,
  Hamburger,
} from './index.style';

function Nav() {
  const [hamburgerState, setHamburgerState] = useState(false);

  const handleHamburgerClick = () => {
    if (window.innerWidth < 768) {
      if (!hamburgerState === true) {
        document.body.style.overflowY = 'hidden';
        document.body.style.touchAction = 'none';
      } else {
        document.body.style.overflowY = 'scroll';
        document.body.style.touchAction = 'auto';
      }
    }
    setHamburgerState(!hamburgerState);
  };

  return (
    <NavContainer>
      <Link
        to="Home"
        smooth
        duration={500}
        style={{ cursor: 'pointer' }}
      >
        <NavBrand />
      </Link>

      <NavLinksContainer>
        <NavLinks active={hamburgerState}>
          <li>
            <Link
              to="Projects"
              isDynamic
              smooth
              duration={500}
              onClick={handleHamburgerClick}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="Contact"
              isDynamic
              smooth
              duration={1000}
              onClick={handleHamburgerClick}
            >
              Contact
            </Link>
          </li>
        </NavLinks>

        <Hamburger active={hamburgerState} onClick={handleHamburgerClick}>
          <span />
          <span />
          <span />
        </Hamburger>
      </NavLinksContainer>
    </NavContainer>
  );
}

export default Nav;
