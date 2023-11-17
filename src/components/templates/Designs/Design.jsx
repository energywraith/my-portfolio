import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Card from 'components/core/Card';
import Button from 'components/core/Button';

function Design({
  name, description, image, figmaLink, demoLink,
}) {
  return (
    <Styled.Card>
      <h4>
        <a href={demoLink} target="_blank" rel="noreferrer">
          {name}
          <img src={image} alt="shelter" />
        </a>
      </h4>
      <p>
        {description}
      </p>
      <Styled.Links>
        <li>
          <a href={figmaLink}>
            <Button>
              Figma
            </Button>
          </a>
        </li>
        <li>
          <a href={demoLink} target="_blank" rel="noreferrer">
            <Button>
              Demo
            </Button>
          </a>
        </li>
      </Styled.Links>
    </Styled.Card>
  );
}

const Styled = {
  Card: styled(Card)`
    overflow: hidden;
    position: relative;
    z-index: 0;

    img {
      transition: filter 300ms;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      object-fit: cover;
      object-position: top;
      filter: brightness(0.25) blur(1px);
      pointer-events: none;
    }

    & > h4, & > p {
      margin: 0;
    }

    & > h4 {
      font-weight: 400;
      font-size: 1.1rem;

      & > a {
        display: block;
      }

      &:hover {
        text-decoration: underline 2px;
        text-underline-offset: 2px;

        & > a > img {
          filter: brightness(0.3) blur(1px);
        }
      }
    }

    & > p {
      color: #cecece;
      line-height: 1.5rem;
      margin-top: 0.75rem;
      font-size: 0.95rem;
      flex-grow: 1;
    }
  `,
  Links: styled.ul`
    margin: 0;
    padding: 0;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 1.25rem;
  `,
};

Design.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  figmaLink: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
};

export default Design;
