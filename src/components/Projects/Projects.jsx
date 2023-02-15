import Card from "../Card"

export default function Projects({projects}) {
  return (<div className='projects'>
    <h2>Projects</h2>
    {
      projects.map((project)  => (
        <Card 
        title={project.title}
        href={project.href}
        body={project.description} />
      ))
    }
  </div>
  )
}