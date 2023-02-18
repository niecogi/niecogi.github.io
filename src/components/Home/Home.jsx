import "./Home.css"
import SocialLinks from '../SocialLinks'
import {  SOCIAL } from "../../../config"
export default function Home() {
 
  return (
    <section className="home-wrapper">
      <h1 className="home-title">
        {" "}
        I'm <span className="home-position">Nieves</span>
      </h1>
      <p className="home-hello">Hello</p>
      <p className="home-paraph">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt
        diam massa, at varius est congue et. Mauris ut leo eu urna tristique
        vestibulum. Maecenas eu rutrum tellus. Vestibulum sem purus, porta
        facilisis magna ac, fermentum dictum nulla. Vivamus eleifend risus at
        dui convallis bibendum. Curabitur id consectetur turpis. Etiam velit
        ante, feugiat vehicula accumsan eu, cursus at ipsum. Nunc ultrices felis
        id ante condimentum scelerisque.
      </p>
      <div className="home-social">
      <SocialLinks socials={SOCIAL} size={'2em'}/>
      </div>
    </section>
  )
}
