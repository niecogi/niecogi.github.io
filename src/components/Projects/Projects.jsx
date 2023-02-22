import Card from "../Card"
import './Projects.css'

export default function Projects({ projects }) {
  return (<section className='project-wrapper' id={'projects'}>
    <h2>Projects</h2>
    <ul className='projects-wrapper'>
      {
        projects.map((project) => (
          <Card
            title={project.title}
            href={project.href}
            hrefGit={project.hrefGit}
            body={project.description}
            photo={project.photo}
            technologies={project.technologies} />
        ))
      }
    </ul>

  </section>
  )
}