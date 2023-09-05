import React, { useState, useMemo } from 'react';
import styled, { css } from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { InView } from 'react-intersection-observer';

import Container from 'components/core/Container';
import backgroundImage from 'assets/splash.webp';
import arrowDown from 'assets/arrow-down.svg';
import Nav from 'components/templates/Nav';
import Animations from 'utils/Animations';
import WhoAmI from 'components/templates/WhoAmI';
import BadgesList from 'components/templates/BadgesList';

function Banner() {
  const { t } = useTranslation();
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const isVisible = useMemo(() => intersectionRatio === 1, [intersectionRatio]);

  return (
    <Styled.Container indicators="all">
      <Styled.ContainerBackground isVisible={isVisible} />
      <Styled.InViewScrollController
        onChange={(_inView, entry) => setIntersectionRatio(entry?.intersectionRatio)}
        threshold={[0, 0.5, 1]}
      />
      <Nav />
      <WhoAmI />
      <BadgesList />
      <Styled.More isVisible={isVisible}>
        <ScrollLink to="Projects" smooth duration={500}>
          <img src={arrowDown} alt={t('banner.findOutMore')} />
          <span>{t('banner.findOutMore')}</span>
        </ScrollLink>
      </Styled.More>
    </Styled.Container>
  );
}

const Styled = {
  Container: styled(Container)`
    height: 100vh;
    max-height: -webkit-fill-available;
    color: ${(props) => props.theme.colors.white};
    display: grid;
    grid-template: auto 1fr auto / auto auto;
    align-items: center;
    justify-content: space-between;
    font-family: Rubik;
    position: relative;
  `,
  ContainerBackground: styled.div`
    position: absolute;
    z-index: ${({ theme }) => theme.layers.background};
    left: 0%;
    top: 0%;
    width: 100%;
    height: 100%;
    transition: background 1s, filter 1s;
    background: url(${backgroundImage}) 75% 150% no-repeat;
    filter: brightness(0.4);

    ${({ isVisible }) => isVisible && css`
      background-position: 75% 80%;
      filter: brightness(0.7);
    `}
  `,
  InViewScrollController: styled(InView)`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  `,
  More: styled.div`
    cursor: pointer;
    width: fit-content;
    transition: visibility 700ms, opacity 700ms;
    opacity: 0;
    visibility: hidden;

    ${({ isVisible }) => isVisible && css`
      opacity: 1;
      visibility: visible;
    `}

    & a {
      display: flex;
      justify-content: start;
      align-items: center;
      column-gap: 1em;
      padding: 2em 0;

      &:not(:hover) > img {
        animation: ${Animations.bubble} 0.5s infinite alternate-reverse;
      }

      & > img {
        height: 1.5em;
        width: 1.5em;
        filter: invert(1);

        &:hover {
          transform: scale(1);
        }
      }
    }

    @media (max-width: 768px) {
      width: 100%;
      grid-column: 1/3;

      & a {
        padding: 2em 0;
        width: 100%;
        justify-content: center;
      }
    }
  `,
};

export default Banner;
