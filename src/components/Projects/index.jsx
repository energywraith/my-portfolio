import React from 'react';
import { InView } from 'react-intersection-observer';
import SectionHeader from 'components/SectionHeader';
import { ProjectsContainer } from './index.style';
import PersonalProjectsList from './PersonalProjectsList';
import CommercialProjectsCarousel from './CommercialProjectsCarousel';

function Projects() {
  return (
    <ProjectsContainer>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div className="rwd-container">
            <SectionHeader
              inView={inView}
              ref={ref}
            >
              Personal Projects
            </SectionHeader>
            <PersonalProjectsList inView={inView} ref={ref} />
          </div>
        )}
      </InView>
      <InView triggerOnce threshold={[0.3, 0.7]}>
        {({ inView, ref }) => (
          <>
            <div className="rwd-container">
              <SectionHeader inView={inView}>Commercial Projects</SectionHeader>
            </div>
            <CommercialProjectsCarousel inView={inView} ref={ref} />
          </>
        )}
      </InView>
    </ProjectsContainer>
  );
}

export default Projects;
