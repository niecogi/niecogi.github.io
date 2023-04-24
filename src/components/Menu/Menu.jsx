import React, { Fragment } from "react"
import { FiHeart } from "react-icons/fi/index.js"
import "./Menu.css"

export default function Menu({ icon }) {
  return (
    <nav className="main-nav">
      <div className="name">
        <FiHeart size={'2rem'}/>

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
