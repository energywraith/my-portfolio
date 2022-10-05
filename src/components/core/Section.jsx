import React from 'react';
import PropTypes from 'prop-types';

function Section({ id, children }) {
  return (
    <div id={id}>
      {children}
    </div>
  );
}

Section.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Section.defaultProps = {
  id: undefined,
};

export default Section;
