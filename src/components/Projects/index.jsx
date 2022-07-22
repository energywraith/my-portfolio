import React from 'react';
import PropTypes from 'prop-types';
import { InView } from 'react-intersection-observer';
import SectionHeader from './SectionHeader';
import { ProjectsContainer } from './index.style';
import PersonalProjectsList from './PersonalProjectsList';
import CommercialProjectsCarousel from './CommercialProjectsCarousel';

function Projects({ id }) {
  return (
    <ProjectsContainer id={id}>
      <InView triggerOnce>
        {({ inView, ref }) => (
          <div className="rwd-container">
            <SectionHeader
              inView={inView}
              ref={ref}
              content="Personal Projects"
            />
            <PersonalProjectsList inView={inView} ref={ref} />
          </div>
        )}
      </InView>
      <InView triggerOnce threshold={[0.3, 0.7]}>
        {({ inView, ref }) => (
          <>
            <div className="rwd-container">
              <SectionHeader inView={inView} content="Commercial Projects" />
            </div>
            <CommercialProjectsCarousel inView={inView} ref={ref} />
          </>
        )}
      </InView>
    </ProjectsContainer>
  );
}

Projects.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Projects;
