import './Technologies.css'
import Pill from '../Pill'

export default function Technologies({ technologies }) {
  return (
    <div className="tech-wrapper">
      {technologies?.map((tech) => (
        <Pill name={tech}/>
      ))}
    </div>
  )
}
