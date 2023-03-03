import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Project from 'components/templates/Project';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
import winamp from 'assets/winamp.webp';
import genius from 'assets/genius.webp';
import vans from 'assets/vans.webp';

const projects = [{
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
  github: 'https://github.com/energywraith/vans-scrapper-website',
}, {
  id: '2',
  intlName: 'projects.winamp',
  technologies: [
    'projects.technologies.vue',
    'projects.technologies.nuxt',
    'projects.technologies.pinia',
  ],
  image: winamp,
  github: 'https://github.com/energywraith/vans-scrapper-website',
}, {
  id: '3',
  intlName: 'projects.geniusMusic',
  technologies: [
    'projects.technologies.react',
    'projects.technologies.styledComponents',
    'projects.technologies.express',
  ],
  image: genius,
  github: 'https://github.com/energywraith/vans-scrapper-website',
}];

const ProjectsList = React.forwardRef(({ inView }, ref) => {
  const { t } = useTranslation();

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
          links={[
            { href: project.preview, name: t('projects.livePreview') },
            { href: project.github, name: t('projects.github') },
          ]}
          image={project.image || 'https://portfolio-behance-final.vercel.app/images/cover-v2.5171a263ef19df011b4ae51b9f346b62.webp'}
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
