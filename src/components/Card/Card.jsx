import React from 'react'
import Technologies from '../Technologies'
import { FiExternalLink, FiGithub } from "react-icons/fi";
import './Card.css'

export default function Card(props) {
  const { href, hrefGit, title, body, photo, technologies } = props
  return <li className="card-wrapper">
    <div className='card-header'>
      <h2>
        {title}
      </h2>
      <div className='projects-links'>
        {href ? <a href={href} target='_blank'><FiExternalLink size='1.6rem'/> </a> : null}
        {hrefGit ? <a href={hrefGit} target='_blank'> <FiGithub size='1.6rem' /> </a> : null}
      </div>
    </div>
    <p>
      {body}
    </p>
    {/*<img src={photo} alt={`Project ${title}`}/> */}
    <div className='card-footer'>
    <Technologies technologies={technologies} />
    </div>
  </li>
}