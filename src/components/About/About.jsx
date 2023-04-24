import "./About.css"
import SocialLinks from "../SocialLinks"
import ImageStatus from "../ImageStatus/ImageStatus"
import { IoLocationSharp } from "react-icons/io5/index.js"
import { INFO } from '../../../config'
import Skills from "../Skills/Skills"

export default function About({ title, position, photo, bio, location }) {
  return (
    <section id="aboutme">
      <h2>About me</h2>
      <div className="home">
        <div className="text">
          <div className="subtitle">
            <p className="subtitle-job">{position}</p>
            <p className="subtitle-location">
              <IoLocationSharp /> {location}
            </p>
          </div>

          <p className="description">{bio.presentation}</p>
          <p className="description">{bio.description}</p>
          <p className="description">{bio.goals}</p>
          <SocialLinks
            github="https://github.com/niecogi"
            linkedin="https://www.linkedin.com/in/nieves-codoner-gil/"
            twitter="https://twitter.com/NievesCodes"
          />
        </div>
        <ImageStatus className="photo" photo={photo} status={"💻"} />
      </div>
      <section>
        <h3> Skills </h3>
        <Skills skills={INFO.skills} size='3em'/>
      </section>
    </section>
  )
}
