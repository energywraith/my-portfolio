import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Accordion from 'components/core/Accordion';
import Container from 'components/core/Container';
import ProjectLink, { linkShape } from 'components/templates/ProjectLink';
import Animations from 'utils/Animations';

function ProjectContent({ overview, features, links }) {
  return (
    <Accordion>
      <Styled.Content>
        <Styled.Overview>
          <h3>Overview</h3>
          <p>
            {overview}
          </p>
        </Styled.Overview>
        <Styled.Features>
          <h3>Features</h3>
          <ul>
            {features.map((feature, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </Styled.Features>
        <Styled.Links>
          {links.map(({ href, content, type }) => (
            <ProjectLink key={type} href={href} content={content} type={type} />
          ))}
        </Styled.Links>
      </Styled.Content>
    </Accordion>
  );
}

const Styled = {
  Content: styled(Container)`
    padding-bottom: 3rem;

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      transform: translateX(30px);
    }
    
    h3 {
      font-family: 'Poppins';
      font-weight: 500;
      
      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
        margin: 0;
        font-size: 1.3em;
        line-height: 1.4em;
      }
    }

    p {
      max-width: 60ch;
      line-height: 1.5em;
      white-space: pre-line;
      text-align: justify;
    }
  `,
  Overview: styled.div`
    & > p {
      opacity: 0;
      animation: ${Animations.fadeIn} 0.5s forwards;
      animation-delay: 0.5s;
    }

  `,
  Features: styled.div`
    margin-top: 2rem;
    padding-bottom: 2rem;

    & > ul {
      padding: 0;
      margin: 0;
      list-style: circle;
      transform: translateX(40px);
      
      & > li {
        opacity: 0;
        animation: ${Animations.fadeIn} 0.5s forwards;
        animation-delay: 0.8s;
        margin: 0.5rem 0 0 1rem;
        
        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
          margin-left: 0;
        }
      }
    }
  `,
  Links: styled.ul`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    column-gap: 1rem;

    & li a {
      
    }
  `,
};

const linksShape = PropTypes.arrayOf(PropTypes.shape(linkShape));

ProjectContent.propTypes = {
  overview: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  links: linksShape.isRequired,
};

export default ProjectContent;

export { linksShape };
