import "./Skills.css"
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io/index.js"
import { FaJava, FaGit, FaNodeJs, FaAngular } from "react-icons/fa/index.js"
import { IoLogoReact } from "react-icons/io5/index.js"
import {
  SiMaterialdesign,
  SiAntdesign,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiCapacitor,
  SiJavascript
} from "react-icons/si/index.js"

export default function Skills({ skills, size }) {
  const technologies = {
    JavaScript: <SiJavascript size={size}/>,
    HTML: <IoLogoHtml5 size={size} />,
    CSS: <IoLogoCss3 size={size} />,
    React: <IoLogoReact size={size} />,
    MUI: <SiMaterialdesign size={size} />,
    AntD: <SiAntdesign size={size} />,
    Java: <FaJava size={size} />,
    Git: <FaGit size={size} />,
    TypeScript: <SiTypescript size={size} />,
    SQL: <SiMysql size={size} />,
    Node: <FaNodeJs size={size} />,
    MongoDB: <SiMongodb size={size} />,
    Express: <SiExpress size={size} />,
    Capacitor: <SiCapacitor size={size} />,
    Angular:  <FaAngular size={size} />
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
