import { InView } from "react-intersection-observer";
import SectionHeader from "./SectionHeader";
import { ProjectsContainer } from "./index.style";
import PersonalProjectsList from "./PersonalProjectsList";
import CommercialProjectsCarousel from "./CommercialProjectsCarousel";

const Projects = ({ id }) => {
  return (
    <ProjectsContainer id={id}>
      <InView triggerOnce>
        {({ inView, ref, entry }) => (
          <>
            <div className="rwd-container">
              <SectionHeader
                inView={inView}
                ref={ref}
                content="Personal Projects"
              />
              <PersonalProjectsList inView={inView} ref={ref} />
            </div>
          </>
        )}
      </InView>
      <InView triggerOnce threshold={[0.3, 0.7]}>
        {({ inView, ref, entry }) => (
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
};

export default Projects;
