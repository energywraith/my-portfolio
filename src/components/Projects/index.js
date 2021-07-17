import { InView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

import { ProjectsContainer, ProjectsList, Project, ProjectLinks } from './index.style'

const Projects = ({ id }) => {
  return (
    <ProjectsContainer id={id}>
      <InView triggerOnce>
        {({ inView, ref, entry }) => (
          <SectionHeader inView={inView} ref={ref} content='Projects' />
        )}
      </InView>
      <InView triggerOnce>
        {({ inView, ref, entry }) => (
          <ProjectsList ref={ref} state={inView} key={inView}>
            <Project>
              <h4> Vans Scrapper Website </h4>
              <ul>
                <li> Express </li>
                <li> MongoDB </li>
                <li> Puppeteer </li>
                <li> React </li>
                <li> React Redux </li>
                <li> Styled Components </li>
              </ul>
              <span> App that scrap data from Vans page every 24 hours, 
                so they can be displayed with filtering and favourites afterwards, 
                which is not possible on the official page. 
                The purpose of creating such project was to create a page that 
                will be more enjoyable to use than the predecessor.
              </span>
              <p style={{ fontSize: "0.8em" }}>
                Note: First load of live preview may take a while, 
                because page is hosted on Heroku, which goes idle when there is a small traffic.
              </p>
              <ProjectLinks>
                <li>
                  <a href="https://vans-scrapper-website.herokuapp.com/" rel="noopener noreferrer"> Live Preview </a>
                </li>
                <li>
                  <a href="https://github.com/energywraith/vans-scrapper-website" rel="noopener noreferrer"> Github </a>
                </li>
              </ProjectLinks>
            </Project>
            <Project>
              <h4> Genius music app </h4>
              <ul>
                <li> Express </li>
                <li> React </li>
                <li> Styled Components </li>
              </ul>
              <span> App based on Genius API, where you can search for songs, based on lyrics or their name.
                You can also look there for your favourite artists or albums. Besides that there are random songs
                generated on home page, so you might discover your new favourite one :).
              </span>
              <p>
                Note: First load of live preview may take a while, 
                because page is hosted on Heroku, which goes idle when there is a small traffic.
              </p>
              <ProjectLinks>
                <li>
                  <a href="https://genius-music-app.herokuapp.com/" rel="noopener noreferrer"> Live Preview </a>
                </li>
                <li>
                  <a href="https://github.com/energywraith/genius-music-app" rel="noopener noreferrer"> Github </a>
                </li>
              </ProjectLinks>
            </Project>
            <Project>
              <h4> Nekiro.dev </h4>
              <ul>
                <li> PHP Laravel </li>
              </ul>
              <span> Portfolio made in Laravel with dynamically rendering content. 
                In this project I have created a custom CMS that lets the client 
                manage projects by himself in dashboard which are then saved in SQLite file.
              </span>
              <p>
                Note: Client did not agree to share the source code,
                so there is only a live preview link to see the page in
                action.
              </p>
              <ProjectLinks>
                <li>
                  <a href="https://www.nekiro.dev/" rel="noopener noreferrer"> Live Preview </a>
                </li>
              </ProjectLinks>
            </Project>
          </ProjectsList>
        )}
      </InView>

    </ProjectsContainer>
  )
}

export default Projects