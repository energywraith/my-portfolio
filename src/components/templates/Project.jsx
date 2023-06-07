import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Animations from 'utils/Animations';

import ProjectHeader, { Styled as ProjectHeaderStyled } from 'components/templates/ProjectHeader';
import ProjectContent, { linksShape } from 'components/templates/ProjectContent';

function Project({
  id, name, description, features, technologies, links, image, isExpanded, onClick,
}) {
  return (
    <Styled.Project className={isExpanded ? 'expanded' : ''}>
      <ProjectHeader
        name={name}
        technologies={technologies}
        isExpanded={isExpanded}
        onClick={() => onClick(id)}
      />
      <Styled.Image src={image} alt={name} />
      {isExpanded && (
        <ProjectContent overview={description} features={features} links={links} />
      )}
    </Styled.Project>
  );
}

const StyledImage = styled.img`
  position: absolute;
  height: 100%;
  object-fit: cover;
  right: -400px;
  top: 50%;
  transform: translateY(-50%);
  z-index: -2;
  transition: transform 600ms;
  box-shadow: 0px 0px 3px #404040;
  width: 100%;
  filter: brightness(0.2);

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}px) {
    width: 400px;
    filter: unset;
  }
`;

const Styled = {
  Project: styled.li`
    position: relative;
    opacity: 0;
    animation: ${Animations.fadeIn} 0s forwards;
    /* animation: ${Animations.fadeIn} 0.5s forwards; */
    /* animation-delay: 1.5s; */
    background: #010101cb;
    overflow: hidden;


    & > div {      
      ${ProjectHeaderStyled.Name}, ${ProjectHeaderStyled.Technologies} {
        transition: transform 300ms;
        transition-delay: 100ms;
        transform: translateX(0);
        opacity: 0.7;
      }
    }

    &:hover, &.expanded {
      /* background: green; slicznie wyglada ten zielony */
      background: black;
      
      & > div {
        ${ProjectHeaderStyled.Name}, ${ProjectHeaderStyled.Technologies} {
          opacity: 1;

          @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
            transform: translateX(30px);
          }
        }
      }

      h4 {
        /* font-size: 3.1em; */
      }

      button::before {
        width: calc(100% + 2rem);
        border-radius: 25px;
      }

      ${StyledImage} {
        transition: transform 600ms;
        transform: translateY(-50%) translateX(-400px);
      }
    }

    &:not(&:last-of-type) {
      border-bottom: 1px solid #282727;
    }
  `,
  Image: StyledImage,
};

Project.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: linksShape.isRequired,
  image: PropTypes.string.isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Project;
