import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import GithubSVG from 'assets/github.svg';
import BrowserSVG from 'assets/browser.svg';

const imageBasedOnType = {
  github: GithubSVG,
  preview: BrowserSVG,
};

function ProjectLink({ href, content, type }) {
  return (
    <Styled.Link>
      <a href={href} rel="noopener noreferrer">
        <img src={imageBasedOnType[type]} alt="github logo" />
        <div>{content}</div>
      </a>
    </Styled.Link>
  );
}

const Styled = {
  Link: styled.li`
    a {
      display: inline-block;
      height: 3rem;
      width: fit-content;

      display: flex;
      align-items: center;
      column-gap: 1rem;
      background: white;
      border-radius: 24px;
      color: #000000;

      font-size: 1.1rem;
      font-family: 'Poppins';
      font-weight: 500;
      letter-spacing: 0.03rem;
      padding: 0.1rem;
      white-space: nowrap;
      width: 100%;

      & img {
        width: 100%;
        height: 100%;
        width: 3rem;
      }

      & div {
        padding-right: 1.5rem;
      }
      
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        overflow: hidden;
        transition: ease-out 250ms width;
        width: 3rem;

        &:hover {
          width: 100%;
        }
      }
    }
  `,
};

const linkShape = {
  href: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

ProjectLink.propTypes = linkShape;

export default ProjectLink;

export { linkShape };
