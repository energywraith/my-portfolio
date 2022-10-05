import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import styled from 'styled-components';
import Animations from 'utils/Animations';

const classes = {
  hideCursor: 'hide-cursor',
  showBackground: 'show-background',
};

const Header = React.forwardRef(({ inView, children }, ref) => (
  <Styled.Header ref={ref}>
    {inView && (
    <Typewriter onInit={(typewriter) => {
      typewriter
        .changeDelay(50)
        .typeString(children)
        .callFunction(
          ({ elements }) => {
            const { cursor } = elements;
            cursor.classList.add(classes.hideCursor);
          },
        )
        .pauseFor(700)
        .callFunction(
          ({ elements }) => {
            const { container } = elements;
            container.classList.add(classes.showBackground);
          },
        )
        .start();
    }}
    />
    )}
  </Styled.Header>
));

Header.propTypes = {
  inView: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};

const Styled = {
  Header: styled.h3`
    margin: 0;
    font-weight: 400;
    width: fit-content;
    color: ${(props) => props.theme.colors.white};
    font-size: 3em;
    margin-top: 1em;

    .Typewriter__cursor {
      position: absolute;
      
      &.hide-cursor {
        animation: ${Animations.fadeOut} 0.6s forwards;
        animation-iteration-count: 1;
      }
    }

    & div {
      background: linear-gradient(
        0deg,
        ${(props) => props.theme.colors.white},
        ${(props) => props.theme.colors.white}
      ) bottom center no-repeat;
      background-size: 0px 3px;
      transition: background-size 500ms;
      background-position: right bottom;
      padding-bottom: 0.1em;

      &.show-background {
        background-size: 100% 3px;
      }
    }

    @media (max-width: ${(props) => props.theme.breakpoints.tablet}px) {
      padding-left: 1rem;
      font-size: 1.8em;
    }
  `,
};

export default Header;
