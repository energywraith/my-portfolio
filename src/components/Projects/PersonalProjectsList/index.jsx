import React from 'react'
import { ProjectsListContainer } from './index.style'
import Project from './Project'

const ProjectsList = React.forwardRef(({ inView }, ref) => {
  return (
    <ProjectsListContainer triggeredInView={inView} ref={ref}> 
      <Project name='Vans Scrapper Website'
        technologies={['Express', 'MongoDB', 'Puppeteer', 'React', 'React Redux', 'Styled Components']}
        description="The Vans Scrapper Website is a site I created to 
        make my search for skateboarding shoes easier. On the original 
        site some features don't work such as filtering, sometimes even 
        the shoes show up although they are not available. The data is updated daily at midnight 
        with the data collected with the scrapper written in puppeteer."
        note='Note: First load of live preview may take a while, 
          because page is hosted on Heroku, which goes idle when there is a small traffic.'
        links={[
          {href: 'https://vans-scrapper-website.herokuapp.com/', name: 'Live Preview'},
          {href: 'https://github.com/energywraith/vans-scrapper-website', name: 'Github'}
        ]}
      />
      <Project name='Genius music app'
        technologies={['Express', 'React', 'Styled Components']}
        description='App based on Genius API, where you can search for songs, based on lyrics or their name.
          You can also look there for your favourite artists or albums. Besides that there are random songs
          generated on home page, so you might discover your new favourite one :).'
        note='Note: First load of live preview may take a while, 
          because page is hosted on Heroku, which goes idle when there is a small traffic.'
        links={[
          {href: 'https://genius-music-app.herokuapp.com/', name: 'Live Preview'},
          {href: 'https://github.com/energywraith/genius-music-app', name: 'Github'}
        ]}
      />
    </ProjectsListContainer>
  )
})

export default ProjectsList