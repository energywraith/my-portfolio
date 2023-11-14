import React from 'react';
import { InView } from 'react-intersection-observer';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Header from 'components/core/Header';
import Container from 'components/core/Container';
import Button from 'components/core/Button';
import CardList from 'components/templates/CardList';
import useProjects from './useProjects';
import Project from './Project';

function Projects() {
  const { t } = useTranslation();

  const projects = useProjects();

  return (
    <Styled.Projects>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <>
            <Styled.Container>
              <Header
                inView={inView}
                ref={ref}
              >
                {t('projects.header')}
              </Header>
              <a href="https://github.com/energywraith">
                <Styled.Button>View All</Styled.Button>
              </a>
            </Styled.Container>
            <CardList
              inView={inView}
              ref={ref}
              items={projects}
              renderComponent={(project) => (
                <Project
                  key={project.intlName}
                  name={t(`${project.intlName}.name`)}
                  description={t(`${project.intlName}.description`)}
                  technologies={project.technologies}
                  links={project.links}
                />
              )}
            />
          </>
        )}
      </InView>
    </Styled.Projects>
  );
}

const Styled = {
  Projects: styled.section`
    width: 100%;
    padding: 0.5rem 0 1rem 0;
    color: ${(props) => props.theme.colors.white};
  `,
  Container: styled(Container)`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Button: styled(Button)`
    font-size: 1em;
    padding: 0.5rem 1rem;
  `,
};

export default Projects;
