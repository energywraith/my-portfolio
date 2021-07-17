import { ProjectContainer, ProjectLinks } from './Project.style'

const Project = ({ name, technologies, description, note, links }) => {
  return (
    <ProjectContainer>
      <h4> {name} </h4>
      <ul>
        {/* Shouldnt be using loop index for indexing list elements, but there wont be changes in them throughout using the page */}
        {technologies.map((technology, index) =>
          <li key={`technology-${index}`}> {technology} </li>
        )}
      </ul>
      <span> {description} </span>
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