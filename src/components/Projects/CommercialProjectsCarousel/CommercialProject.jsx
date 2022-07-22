import React from 'react';
import PropTypes from 'prop-types';
import { CarouselProject, CarouselProjectCover } from './CommercialProject.style';

function CommercialProject({ image, name, description }) {
  return (
    <CarouselProject>
      {image
        && <CarouselProjectCover src={image} alt={`${name} background`} />}
      <h4>
        {name}
      </h4>
      <h5>
        {description}
      </h5>
    </CarouselProject>
  );
}

CommercialProject.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

CommercialProject.defaultProps = {
  image: null,
};

export default CommercialProject;
