import React from 'react';
import { InView } from 'react-intersection-observer';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Header from 'components/core/Header';
import Container from 'components/core/Container';
import ProjectsList from 'components/templates/ProjectsList';

function Projects() {
  const { t } = useTranslation();

  return (
    <Styled.Projects>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <Container>
            <Header
              inView={inView}
              ref={ref}
            >
              {t('projects.header')}
            </Header>
            <ProjectsList inView={inView} ref={ref} />
          </Container>
        )}
      </InView>
    </Styled.Projects>
  );
}

const Styled = {
  Projects: styled.section`
    width: 100%;
    padding: 0.5em 0 2em 0;
    color: ${(props) => props.theme.colors.white};
  `,
};

export default Projects;
