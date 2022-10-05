import React from 'react';
import PropTypes from 'prop-types';
import Project from 'components/core/Project';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

const ProjectsList = React.forwardRef(({ inView }, ref) => {
  const { t } = useTranslation();

  return (
    <Styled.List triggeredInView={inView} ref={ref}>
      <Project
        name={t('projects.vansScrapper')}
        technologies={[t('projects.technologies.express'), t('projects.technologies.mongoDb'), t('projects.technologies.puppeteer'), t('projects.technologies.react'), t('projects.technologies.reactRedux'), t('projects.technologies.styledComponents')]}
        description={t('projects.vansScrapperDescription')}
        note={t('projects.herokuNote')}
        links={[
          { href: 'https://vans-scrapper-website.herokuapp.com/', name: t('projects.livePreview') },
          { href: 'https://github.com/energywraith/vans-scrapper-website', name: t('projects.github') },
        ]}
      />
      <Project
        name={t('projects.geniusMusic')}
        technologies={[t('projects.technologies.express'), t('projects.technologies.react'), t('projects.technologies.styledComponents')]}
        description={t('projects.geniusMusicDescription')}
        note={t('projects.herokuNote')}
        links={[
          { href: 'https://genius-music-app.herokuapp.com/', name: t('projects.livePreview') },
          { href: 'https://github.com/energywraith/genius-music-app', name: t('projects.github') },
        ]}
      />
    </Styled.List>
  );
});

const Styled = {
  List: styled.ul`
    display: grid;
    grid-template-columns: auto;
    row-gap: 2em;
    height: 100%;
    padding: 0;
    opacity: 0;
    transition: opacity 500ms;
    transition-delay: 800ms;
    width: 100%;
    box-sizing: border-box;
    margin: 1em 0;
    justify-content: center;

    ${({ triggeredInView }) => triggeredInView && css`
      opacity: 1;
    `};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      width: fit-content;
      padding-left: 2rem;
      justify-content: flex-start;
    }
  `,
};

ProjectsList.propTypes = {
  inView: PropTypes.bool.isRequired,
};

export default ProjectsList;
