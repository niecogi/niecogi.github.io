import './Technologies.css'
import Pill from '../Pill'
export default function Technologies({ technologies }) {
  return (
    <div className="tech-wrapper">
      {technologies?.map((tech) => (
        <div className='tech'>
          <span className={tech}> </span>
          <p>{tech}</p>
        </div>
      ))}
    </div>
  )
}
