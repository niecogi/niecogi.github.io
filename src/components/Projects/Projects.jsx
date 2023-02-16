import Card from "../Card"
import './Projects.css'

export default function Projects({ projects }) {
  return (<div className='project-wrapper'>
    <h2>Projects</h2>
    <ul className='projects-wrapper'>
      {
        projects.map((project) => (
          <Card
            title={project.title}
            href={project.href}
            body={project.description}
            photo={project.photo}
            technologies={project.technologies} />
        ))
      }
    </ul>

  </div>
  )
}