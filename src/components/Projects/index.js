import { InView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

import ProjectsList from './ProjectsList'
import { ProjectsContainer } from './index.style'

const Projects = ({ id }) => {
  return (
    <ProjectsContainer id={id}>
      <InView triggerOnce>
        {({ inView, ref, entry }) => (
          <>
            <SectionHeader inView={inView} ref={ref} content='Projects' />
            <ProjectsList inView={inView} />
          </>
        )}
      </InView>
    </ProjectsContainer>
  )
}

export default Projects