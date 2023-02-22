
import './Skills.css'

export default function ({technologies}) {
  return (
    <ul className='pills'>
        {technologies.map((tech) => (
             <li key={tech}>
               
             </li>
        ))}
    </ul>
  )
}

