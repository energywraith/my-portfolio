import React, { useState } from 'react';
import { Link } from 'react-scroll';
import styled, { css } from 'styled-components';
// import Brand from 'components/core/Brand';
import Hamburger from 'components/core/Hamburger';
import Animations from 'utils/Animations';
import { useTranslation } from 'react-i18next';

function Nav() {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  const onHamburgerClick = () => setIsActive((isCurrentlyActive) => {
    if (window.innerWidth < 768) {
      if (!isCurrentlyActive === true) {
        document.body.style.overflowY = 'hidden';
        document.body.style.touchAction = 'none';
      } else {
        document.body.style.overflowY = 'scroll';
        document.body.style.touchAction = 'auto';
      }
    }

    return !isCurrentlyActive;
  });

  return (
    <Styled.Nav>
      {/* <Styled.BrandLink
        to="Home"
        smooth
        duration={500}
        style={{ cursor: 'pointer' }}
      >
        <Brand />
      </Styled.BrandLink> */}

      <Styled.NavLinksWrapper>
        <Styled.NavLinks active={isActive}>
          <li>
            <Styled.NavLink
              to="Projects"
              isDynamic
              duration={500}
              onClick={onHamburgerClick}
              smooth
            >
              {t('projects.nav')}
            </Styled.NavLink>
          </li>
          <li>
            <Styled.NavLink
              to="Contact"
              isDynamic
              duration={1000}
              onClick={onHamburgerClick}
              smooth
            >
              {t('contact.nav')}
            </Styled.NavLink>
          </li>
        </Styled.NavLinks>
      </Styled.NavLinksWrapper>

      <Hamburger active={isActive} onClick={onHamburgerClick} />
    </Styled.Nav>
  );
}

const Styled = {
  Nav: styled.nav`
    grid-column: 1/3;
    display: flex;
    justify-content: space-between;
    padding: 2em 0;

    & img {
      width: 2em;
      height: 2em;
    }
  `,
  BrandLink: styled(Link)`
    display: none;
    
    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      display: block;
    }
  `,
  NavLinksWrapper: styled.div`
    display: flex;
    align-items: center;
    column-gap: 5em;
    margin-left: auto;
    margin-right: 3em;
  `,
  NavLinks: styled.ul`
    z-index: ${({ theme }) => theme.layers.modal};
    padding: 0;
    margin: 0;
    opacity: 0;
    display: none;
    column-gap: 2em;
    transition: 150ms ease-out;
    background: ${(props) => props.theme.colors.black};
    animation: ${Animations.fadeIn} 0.1s forwards;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100%;
    max-height: -webkit-fill-available;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-size: 2.5em;
    row-gap: 1em;

    & li a {
      cursor: pointer;
      padding: 1em;
    }

    ${(props) => props.active && css`
      opacity: 1; 
      display: flex;
    `}

    @media(min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      animation: none;
      position: unset;
      width: fit-content;
      height: fit-content;
      max-height: unset;
      flex-direction: row;
      font-size: 1.2em;
      background: none;
    }
  `,
  NavLink: styled(Link)`
    cursor: pointer;
    padding: 1em;
  `,
};

export default Nav;
