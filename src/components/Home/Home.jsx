import "./Home.css"
import SocialLinks from "../SocialLinks"
import { SOCIAL } from "../../../config"
import { FiTerminal } from "react-icons/fi";
export default function Home({ name, position, description }) {
  return (
    <section className="home-wrapper" id="home">
      <h1 className="home-title">
        I'm <span className="home-name">{name}</span>
      </h1>
      <p className="home-hello">Hello,</p>
      <p className="home-paraph">{description}</p>
      <p className="home-position"> <FiTerminal /> {position}</p>
      <div className="home-social">
        <SocialLinks socials={SOCIAL} size={"2em"} />
      </div>
    </section>
  )
}
