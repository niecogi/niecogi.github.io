import React, {Fragment} from "react"
import './Home.css'
import SocialLinks from "../SocialLinks"

export default function Home({title, subtitle, photo, description}) {
  return <div className='header'>
    <div className='text'>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <p>{description}</p>
      <SocialLinks
        github='https://github.com/niecogi'
        linkedin='https://www.linkedin.com/in/nieves-codoner-gil/'
        twitter='https://twitter.com/NievesCodes'/>
    </div>
    <img
      className='photo'
      src={photo}/>

  </div>
}