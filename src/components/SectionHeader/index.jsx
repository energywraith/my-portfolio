import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import { Header } from './index.style';

const SectionHeader = React.forwardRef(({ inView, children }, ref) => {
  const cursor = useRef(null);
  const container = useRef(null);

  return (
    <Header ref={ref}>
      {inView && (
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .callFunction(({ elements }) => {
              container.current = elements.container;
              cursor.current = elements.cursor;
            })
            .changeDelay(50)
            .typeString(children)
            .callFunction(
              () => cursor.current.classList.add('hide-cursor'),
            )
            .pauseFor(700)
            .callFunction(
              () => container.current.classList.add('show-background'),
            )
            .start();
        }}
      />
      )}
    </Header>
  );
});

SectionHeader.propTypes = {
  inView: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};

export default SectionHeader;
