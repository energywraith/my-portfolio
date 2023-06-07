import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Container from 'components/core/Container';
import { useTranslation } from 'react-i18next';

function ProjectHeader({
  name, technologies, isExpanded, onClick,
}) {
  const { t } = useTranslation();

  return (
    <Styled.Header onClick={onClick}>
      <Styled.Content>
        <Styled.Name>{name}</Styled.Name>
        <Styled.Technologies>
          {technologies.map((technology, index) => (
          // eslint-disable-next-line
          <li key={`technology-${index}`}>
            {technology}
          </li>
          ))}
        </Styled.Technologies>
        <Styled.Expand>
          {!isExpanded ? t('projects.view') : t('projects.hide')}
          {t('projects.details')}
        </Styled.Expand>
      </Styled.Content>
    </Styled.Header>
  );
}

const Styled = {
  Header: styled.div`
    cursor: pointer;
  `,
  Content: styled(Container)`
    padding: 3rem 2rem;
    min-height: 6rem;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    gap: 1rem;
  `,
  Name: styled.h4`
    margin: 0;
    font-size: 2em;

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      font-size: 2.5em;
      height: 1.1em;
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
  Expand: styled.button`
    grid-row: 1/3;
    grid-column: 2;
    align-self: center;
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.secondary};
    border: 0;
    background: transparent;
    font-family: 'Poppins';
    font-weight: 500;
    font-size: 1em;
    position: relative;
    pointer-events: none;
    padding: 0.5rem;
    letter-spacing: 0.5px;
    white-space: nowrap;
    margin-left: 1rem;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      margin-right: 6rem;
    }

    &::before {
      content: '';
      position: absolute;
      left: -1rem;
      bottom: 0;
      width: 2.5rem;
      height: 100%;
      background: ${(props) => props.theme.colors.darkGray};
      border-radius: 50%;
      z-index: -1;
      transition: all 300ms;
      transition-delay: 100ms;
      box-shadow: 0px 0px 6px #121212;
    }
  `,
};

ProjectHeader.propTypes = {
  name: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string).isRequired,
  isExpanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectHeader;

export { Styled };
