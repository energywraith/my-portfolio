import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import { Header } from './index.style';

const SectionHeader = React.forwardRef(({ inView, children }, ref) => (
  <Header ref={ref}>
    {inView && (
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .changeDelay(50)
            .typeString(children)
            .callFunction(
              ({ elements }) => {
                const { cursor } = elements;
                cursor.classList.add('hide-cursor');
              },
            )
            .pauseFor(700)
            .callFunction(
              ({ elements }) => {
                const { container } = elements;
                container.classList.add('show-background');
              },
            )
            .start();
        }}
      />
    )}
  </Header>
));

SectionHeader.propTypes = {
  inView: PropTypes.bool.isRequired,
  children: PropTypes.string.isRequired,
};

export default SectionHeader;
