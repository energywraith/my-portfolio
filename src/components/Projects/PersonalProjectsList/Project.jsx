import { ProjectContainer, ProjectName, ProjectTechnologiesList, ProjectDescription, ProjectLinks } from './Project.style'

const Project = ({ name, technologies, description, note, links }) => {
  return (
    <ProjectContainer>
      <ProjectName> {name} </ProjectName>
      <ProjectTechnologiesList>
        {/* Shouldnt be using loop index for indexing list elements, but i dont plan changes to them throughout using the page */}
        {technologies.map((technology, index) =>
          <li key={`technology-${index}`}> {technology} </li>
        )}
      </ProjectTechnologiesList>
      <ProjectDescription> {description} </ProjectDescription>
      <p style={{ fontSize: "0.8em" }}> {note} </p>
      <ProjectLinks>
        {links.map((link, index) => 
          <li key={`link-${index}`}>
            <a href={link.href} rel="noopener noreferrer"> {link.name} </a>
          </li>
        )}
      </ProjectLinks>
    </ProjectContainer>
  )
}

export default Project