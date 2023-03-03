import React from 'react';
import { InView } from 'react-intersection-observer';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Header from 'components/core/Header';
import Container from 'components/core/Container';
import ProjectsList from 'components/templates/ProjectsList';

// 5. See my work - tu bym bardziej rozdzielił te pozycje + może dodał jakąś grafikę/screen?
// To luźna myśl.

function Projects() {
  const { t } = useTranslation();

  return (
    <Styled.Projects>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <>
            <Container>
              <Header
                inView={inView}
                ref={ref}
              >
                {t('projects.header')}
              </Header>
            </Container>
            <ProjectsList inView={inView} ref={ref} />
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

    @media (min-width: ${(props) => props.theme.breakpoints.tablet}px) {
      padding-bottom: 4rem;
    }
  `,
};

export default Projects;
