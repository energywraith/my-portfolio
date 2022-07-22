import React from 'react';
import PropTypes from 'prop-types';
import brandIcon from 'assets/me-annoyed.jpg';
import { BrandContainer } from './index.style';

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
