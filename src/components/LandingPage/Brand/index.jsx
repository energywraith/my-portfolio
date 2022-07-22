import React from 'react';
import PropTypes from 'prop-types';
import { BrandContainer } from './index.style';
import brandIcon from '../images/66721782.jpg';

function Brand({ className }) {
  return (
    <BrandContainer className={className}>
      <img src={brandIcon} alt="brandIcon" />
      <span> Adam Jałocha </span>
      <span> Web developer </span>
    </BrandContainer>
  );
}

Brand.propTypes = {
  className: PropTypes.string,
};

Brand.defaultProps = {
  className: '',
};

export default Brand;
