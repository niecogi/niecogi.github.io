import Pill from '../Pill'

export default function Pills({technologies}) {
  return (
    <ul>
        {technologies.map((tech) => (
             <li key={tech.name}>
                <Pill name={tech.name} />
             </li>
        ))}
    </ul>
  )
}

