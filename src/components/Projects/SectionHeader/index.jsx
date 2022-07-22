import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';
import { Header } from './index.style';

const SectionHeader = React.forwardRef(({ inView, content }, ref) => (
  <Header ref={ref}>
    {inView && (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .changeDelay(50)
          .typeString(content)
          .callFunction(
            // eslint-disable-next-line
            (state) => (state.elements.cursor.style.display = 'none'),
          )
          .pauseFor(200)
          .callFunction(
            // eslint-disable-next-line
            (state) => (state.elements.container.style.backgroundSize = '100% 3px'),
          )
          .start();
      }}
    />
    )}
  </Header>
));

SectionHeader.propTypes = {
  inView: PropTypes.bool.isRequired,
  content: PropTypes.string.isRequired,
};

export default SectionHeader;
