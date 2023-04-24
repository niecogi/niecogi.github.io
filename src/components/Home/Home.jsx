import { FiTerminal } from "react-icons/fi";
import { SOCIAL } from "../../../config";
import SocialLinks from "../SocialLinks";
import "./Home.css";
export default function Home({ name, position, description, cv }) {
  return (
    <section className="home-wrapper" id="home">
      <h1 className="home-title">
        I'm <span className="name">{name}</span>
      </h1>
      <p className="hello">Hello,</p>
      <p className="paraph">{description}</p>
      <p className="position"> <FiTerminal /> {position}</p>
      { /*cv ? <button> Download CV </button> : null */}
      <div className="social">
        <SocialLinks socials={SOCIAL} size={"2em"} />
      </div>
    </section>
  )
}
