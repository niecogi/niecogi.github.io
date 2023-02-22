import React from "react"
import { IoLogoJavascript, IoLogoHtml5, IoLogoCss3 } from "react-icons/io"
import { FaJava, FaGit, FaNodeJs } from "react-icons/fa"
import { IoLogoReact } from "react-icons/io5"
import {
  SiMaterialui,
  SiAntdesign,
  SiTypescript,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiCapacitor
} from "react-icons/si"
import "./Pill.css"

const technologies = {
  JavaScript: <IoLogoJavascript />,
  HTML: <IoLogoHtml5 />,
  CSS: <IoLogoCss3 />,
  React: <IoLogoReact />,
  MUI: <SiMaterialui />,
  AntD: <SiAntdesign />,
  Java: <FaJava />,
  Git: <FaGit />,
  TS: <SiTypescript />,
  SQL: <SiMysql />,
  Node: <FaNodeJs />,
  MongoDB: <SiMongodb />,
  Express: <SiExpress />,
  Capacitor: <SiCapacitor />
}

export default function Pill({ name }) {
  return (
    <button className={"btn-pill"} id={name}>
      {technologies[name]}
      {` ${name}`}
    </button>
  )
}
