import { InView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'
import { ProjectsContainer } from './index.style'
import PersonalProjectsList from './PersonalProjectsList'
import CommercialProjectsCarousel from './CommercialProjectsCarousel'

const Projects = ({ id }) => {
  return (
    <ProjectsContainer id={id}>
      <InView triggerOnce>
        {({ inView, ref, entry }) => (
          <>
            <SectionHeader inView={inView} ref={ref} content='Personal Projects' />
            <PersonalProjectsList inView={inView} ref={ref} />
          </>
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref, entry }) => (
          <>
            <SectionHeader inView={inView} ref={ref} content='Commercial Projects' />
            <CommercialProjectsCarousel inView={inView} />
          </>
        )}
      </InView>
    </ProjectsContainer>
  )
}

export default Projects