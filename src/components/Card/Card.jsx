import React from 'react'
import Technologies from '../Technologies'
import { FiExternalLink, FiGithub } from "react-icons/fi";
import './Card.css'

export default function Card(props) {
  const { href, hrefGit, title, body, photo, technologies } = props
  return <li className="card">
    <div className='card-wrapper'>
      <div className='card-header'>
        <h2>
          {title}
        </h2>
        <div className='projects-links'>
          <a href={href} target='_blank'><FiExternalLink /> </a>
          <a href={hrefGit} target='_blank'> <FiGithub /></a>
        </div>
      </div>

      <p>
        {body}
      </p>
      {/*<img src={photo} alt={`Project ${title}`}/> */}
    </div>
    <Technologies technologies={technologies} />

  </li>
}