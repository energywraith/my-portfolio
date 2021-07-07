import React from 'react'
import { BrandContainer } from './Brand.style'
import brandIcon from '../../img/LandingPage/66721782.jpg'

const Brand = ({ className }) => {
  return (
    <BrandContainer className={className}>
      <img src={brandIcon} alt="brandIcon" />
      <span> Adam Jałocha </span>
      <span> Web developer </span>
    </BrandContainer>
  )
}

export default Brand