import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/core/Card';
import Button from 'components/core/Button';

function Project({
  name, technologies, description, links,
}) {
  const technologiesParsed = technologies.map((technology, index) => {
    const isLast = index === technologies.length - 1;

    if (isLast) {
      return technology;
    }

    return `${technology} • `;
  });

  return (
    <Card>
      <Styled.Small>
        {technologiesParsed}
      </Styled.Small>
      <Styled.Header>
        <a href={links.at(-1).href}>
          {name}
        </a>
      </Styled.Header>
      <Styled.Paragraph>{description}</Styled.Paragraph>
      <Styled.Links>
        {links.map((link) => (
          <li key={link.text}>
            <a href={link.href}>
              <Button>{link.text}</Button>
            </a>
          </li>
        ))}
      </Styled.Links>
    </Card>
  );
}

const Styled = {
  Small: styled.small`
    color: rgb(255, 75, 100);
    font-weight: 400;
    font-size: 0.8rem;
  `,
  Header: styled.h4`
    margin: 0;
    font-weight: 400;
    font-family: 'Poppins';
    font-size: 1.1rem;
    margin-top: 0.5rem;

    & > a {
      display: flex;
      align-items: center;
      column-gap: 0.5rem;

      & > img {
        height: 1.5em;
      } 

      &:hover {
        text-decoration: underline 2px;
        text-underline-offset: 2px;
      }
    }
  `,
  Paragraph: styled.p`
    color: #999;
    line-height: 1.5rem;
    margin-top: 0.5rem;
    font-size: 0.95rem;
    flex-grow: 1;
  `,
  Links: styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 0.25rem;
  `,
};

Project.propTypes = {
  name: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    href: PropTypes.string,
  })).isRequired,
  description: PropTypes.string.isRequired,
};

export default Project;
