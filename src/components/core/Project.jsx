import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Animations from 'utils/Animations';

function Project({
  name, technologies, description, note, links,
}) {
  return (
    <Styled.Project>
      <Styled.Name>{name}</Styled.Name>
      <Styled.Technologies>
        {technologies.map((technology, index) => (
          // eslint-disable-next-line
          <li key={`technology-${index}`}>
            {technology}
          </li>
        ))}
      </Styled.Technologies>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Note>{note}</Styled.Note>
      <Styled.Links>
        {links.map((link, index) => (
          // eslint-disable-next-line
          <li key={`link-${index}`}>
            <a href={link.href} rel="noopener noreferrer">
              {link.name}
            </a>
          </li>
        ))}
      </Styled.Links>
    </Styled.Project>
  );
}

const Styled = {
  Project: styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 1em;
    padding-top: 1rem;
    border-radius: 4px;
    opacity: 0;
    animation: ${Animations.fadeIn} 0.5s forwards;
    animation-delay: 1.5s;
  `,
  Name: styled.h4`
    margin: 0;
    font-size: 2em;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      font-size: 3em;
    }
  `,
  Technologies: styled.ul`
    padding: 0;
    display: flex;
    column-gap: 2em;
    letter-spacing: 1px;
    margin-bottom: 1em;
    text-transform: uppercase;
    font-size: 0.8em;
    flex-wrap: wrap;
    row-gap: 1em;
  `,
  Description: styled.p`
    max-width: 65ch;
    line-height: 2em;
    font-weight: 100;
  `,
  Note: styled.p`
    font-size: 0.8em;
    padding: 0;
    margin: 0;
  `,
  Links: styled.ul`
    margin-top: 1.5em;
    padding: 0;
    display: flex;
    column-gap: 1em;
    text-transform: uppercase;

    & li a {
      color: ${(props) => props.theme.colors.lightBlue};
      font-size: 1.15em;
      letter-spacing: 1px;
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.colors.lightBlueSecondary};
      }
    }
  `,
};

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
