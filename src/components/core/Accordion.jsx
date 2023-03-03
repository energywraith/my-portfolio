import React, {
  useLayoutEffect, useRef,
} from 'react';
import { PropTypes } from 'prop-types';
import gsap from 'gsap';
import styled from 'styled-components';
import Animations from 'utils/Animations';

function Accordion({ children }) {
  const contextRef = useRef();
  const contentRef = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(contentRef.current, { height: 'auto' });

      gsap.from(contentRef.current, {
        height: 0,
        duration: 0.5,
        ease: 'power1.inOut',
      });
    }, contextRef);

    return () => ctx.revert();
  }, []);

  return (
    <Styled.Accordion ref={contextRef}>
      <div ref={contentRef}>
        {children}
      </div>
    </Styled.Accordion>
  );
}

const Styled = {
  Accordion: styled.div`
    /* opacity: 0;
    animation: ${Animations.fadeIn} 0.5s forwards;
    animation-delay: 0.5s; */
  `,
};

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Accordion;
