import React, {Fragment} from "react"
import './Menu.css'
import {FiHeart} from "react-icons/fi"

export default function Menu({title, icon}) {
  return <nav>
    <div className='name'>
      <h2 className='title'>{title}</h2>
      <FiHeart className='heart-icon' />
    </div>

    <ol>
      <li><a href="#aboutme"><i className="uil uil-user"></i>About me</a></li>
      <li><a href="#projects"><i className="uil uil-scenery"></i>Projects</a></li>
      <li><a href="#contact"><i className="uil uil-message"></i>Contact</a></li>
    </ol>
  </nav>
}