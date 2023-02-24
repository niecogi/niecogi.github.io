import "./Skills.css"
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io"
import { FaJava, FaGit, FaNodeJs } from "react-icons/fa"
import { IoLogoReact } from "react-icons/io5"
import {
  SiMaterialui,
  SiAntdesign,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiCapacitor,
  SiJavascript
} from "react-icons/si"

export default function Skills({ skills, size }) {
  const technologies = {
    JavaScript: <SiJavascript size={size} />,
    HTML: <IoLogoHtml5 size={size} />,
    CSS: <IoLogoCss3 size={size} />,
    React: <IoLogoReact size={size} />,
    MUI: <SiMaterialui size={size} />,
    AntD: <SiAntdesign size={size} />,
    Java: <FaJava size={size} />,
    Git: <FaGit size={size} />,
    TypeScript: <SiTypescript size={size} />,
    SQL: <SiMysql size={size} />,
    Node: <FaNodeJs size={size} />,
    MongoDB: <SiMongodb size={size} />,
    Express: <SiExpress size={size} />,
    Capacitor: <SiCapacitor size={size} />
  }
  return (
    <ul className="skills">
      {skills?.map((skill) => (
        <li key={skill}>
          <div className="skill-wrapper">
            {technologies[skill]}
            <figcaption>{skill}</figcaption>
          </div>
        </li>
      ))}
    </ul>
  )
}
