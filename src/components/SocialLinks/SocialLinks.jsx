import React, {Fragment} from "react"
import {FiGithub, FiLinkedin, FiTwitter} from "react-icons/fi"

export default function SocialLinks({twitter, github, linkedin}) {
  return <div className='social-icons'>
    <a href={twitter} target="_blank" rel="noopener noreferrer me" title="Twitter">
      <FiTwitter size={'2em'}/>
    </a>
    <a href={github} target="_blank" rel="noopener noreferrer me" title="Github">
      <FiGithub size={'2em'} />
    </a>
    <a href={linkedin} target="_blank" rel="noopener noreferrer me" title="Linkedin">
     <FiLinkedin size={'2em'} />
    </a>

  </div>
}