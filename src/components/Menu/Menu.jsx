import React, { Fragment } from "react"
import { FiHeart } from "react-icons/fi"
import "./Menu.css"

export default function Menu({ icon }) {
  return (
    <nav>
      <div className="name">
        <h2 className="title"> {icon ? <FiHeart/> : null } </h2>

      </div>

      <ol>
        <li>
          <a href="#aboutme">
            <i className="uil uil-user"></i>About me
          </a>
        </li>
        <li>
          <a href="#projects">
            <i className="uil uil-scenery"></i>Projects
          </a>
        </li>
        <li>
          <a href="#contact">
            <i className="uil uil-message"></i>Contact
          </a>
        </li>
      </ol>
    </nav>
  )
}
