import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import Project from 'components/templates/Project';
import winamp from 'assets/winamp.webp';
import genius from 'assets/genius.webp';
import vans from 'assets/vans.webp';

const getProjects = (githubContent, previewContent) => [{
  id: '1',
  intlName: 'projects.vansScrapper',
  technologies: [
    'projects.technologies.react',
    'projects.technologies.reactRedux',
    'projects.technologies.styledComponents',
    'projects.technologies.express',
    'projects.technologies.mongoDb',
    'projects.technologies.puppeteer',
  ],
  image: vans,
  links: [
    { href: 'https://github.com/energywraith/vans-scrapper-website', content: githubContent, type: 'github' },
  ],
}, {
  id: '2',
  intlName: 'projects.winamp',
  technologies: [
    'projects.technologies.vue',
    'projects.technologies.nuxt',
    'projects.technologies.pinia',
  ],
  image: winamp,
  links: [
    { href: 'https://github.com/energywraith/winamp', content: githubContent, type: 'github' },
    { href: 'https://winamp.vercel.app', content: previewContent, type: 'preview' },
  ],
}, {
  id: '3',
  intlName: 'projects.geniusMusic',
  technologies: [
    'projects.technologies.react',
    'projects.technologies.styledComponents',
    'projects.technologies.express',
  ],
  image: genius,
  links: [
    { href: 'https://github.com/energywraith/genius-music-app', content: githubContent, type: 'github' },
  ],
}];

const ProjectsList = React.forwardRef(({ inView }, ref) => {
  const { t } = useTranslation();

  const projects = getProjects(t('projects.github'), t('projects.livePreview'));

  const [expandedProject, setExpandedProject] = useState(null);

  const onProjectExpand = (id) => {
    if (expandedProject === id) {
      setExpandedProject(null);
      return;
    }

    setExpandedProject(id);
  };

  return (
    <Styled.List triggeredInView={inView} ref={ref}>
      {projects.map((project) => (
        <Project
          key={project.id}
          id={project.id}
          name={t(`${project.intlName}.name`)}
          description={t(`${project.intlName}.description`)}
          features={t(`${project.intlName}.features`, { returnObjects: true })}
          technologies={project.technologies.map((technology) => t(technology))}
          note={t(project.note)}
          links={project.links}
          image={project.image}
          isExpanded={expandedProject === project.id}
          onClick={onProjectExpand}
        />
      ))}
    </Styled.List>
  );
});

/* border-top: 1px solid #282727; */
const Styled = {
  List: styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    height: 100%;
    padding: 0;
    opacity: 0;
    transition: opacity 500ms;
    transition-delay: 800ms;
    width: 100%;
    /* gap: 1rem; */
    box-sizing: border-box;
    margin: 2rem 0 1rem 0;
    justify-content: center;

    ${({ triggeredInView }) => triggeredInView && css`
      opacity: 1;
    `};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}px) {
      justify-content: flex-start;
    }
  `,
};

ProjectsList.propTypes = {
  inView: PropTypes.bool.isRequired,
};

export default ProjectsList;
