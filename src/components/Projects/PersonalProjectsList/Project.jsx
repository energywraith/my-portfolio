import React from 'react';
import PropTypes from 'prop-types';
import {
  ProjectContainer, ProjectName, ProjectTechnologiesList, ProjectDescription, ProjectLinks,
} from './Project.style';

function Project({
  name, technologies, description, note, links,
}) {
  return (
    <ProjectContainer>
      <ProjectName>
        {name}
      </ProjectName>
      <ProjectTechnologiesList>
        {technologies.map((technology, index) => (
          // eslint-disable-next-line
          <li key={`technology-${index}`}>
            {technology}
          </li>
        ))}
      </ProjectTechnologiesList>
      <ProjectDescription>
        {description}
      </ProjectDescription>
      <p style={{ fontSize: '0.8em' }}>
        {note}
      </p>
      <ProjectLinks>
        {links.map((link, index) => (
          // eslint-disable-next-line
          <li key={`link-${index}`}>
            <a href={link.href} rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </ProjectLinks>
    </ProjectContainer>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  description: PropTypes.string.isRequired,
  note: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    href: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
};

export default Project;
