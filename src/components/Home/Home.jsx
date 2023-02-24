import "./Home.css"
import SocialLinks from "../SocialLinks"
import { SOCIAL } from "../../../config"
import { FiTerminal } from "react-icons/fi";
export default function Home({ name, position, description }) {
  return (
    <section className="home-wrapper" id="home">
      <h1 className="home-title">
        I'm <span className="name">{name}</span>
      </h1>
      <p className="hello">Hello,</p>
      <p className="paraph">{description}</p>
      <p className="position"> <FiTerminal /> {position}</p>
      <div className="social">
        <SocialLinks socials={SOCIAL} size={"2em"} />
      </div>
    </section>
  )
}
