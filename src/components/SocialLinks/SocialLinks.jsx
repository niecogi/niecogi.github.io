import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi"
import "./SocialLinks.css"



export default function SocialLinks({ socials, size }) {
  const icons = {
    twitter: <FiTwitter size={size} />,
    github: <FiGithub size={size} />,
    linkedin: <FiLinkedin size={size} />
  }
  return (
    <div className="social-icons">
      {socials?.map((social) => (
        <a
          href={social.href}
          target="_blank"
          rel="noopener noreferrer me"
          title={social.name}
        >
          {icons[social.name.toLowerCase()]}
        </a>
      ))}
    </div>
  )
}

{
  /* 
  <a href={twitter} target="_blank" rel="noopener noreferrer me" title="Twitter">
      <FiTwitter size={'1.5em'} className='icons' />
    </a>
    <a href={github} target="_blank" rel="noopener noreferrer me" title="Github">
      <FiGithub size={'1.5em'} />
    </a>
    <a href={linkedin} target="_blank" rel="noopener noreferrer me" title="Linkedin">
     <FiLinkedin size={'1.5em'}  />
    </a>*/
}
