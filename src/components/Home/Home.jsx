import React, {Fragment} from "react"
import './Home.css'
import SocialLinks from "../SocialLinks"
import ImageStatus from "../ImageStatus/ImageStatus"

export default function Home({title, subtitle, photo, bio}) {
  return <div className='header'>
    <div className='text'>
      <h1>{title}</h1>
      <p className='subtitle'>{subtitle}</p>
      <p className='description'>{bio}</p>
      <SocialLinks
        github='https://github.com/niecogi'
        linkedin='https://www.linkedin.com/in/nieves-codoner-gil/'
        twitter='https://twitter.com/NievesCodes'/>
    </div>
    <ImageStatus
      className='photo'
      photo={photo}
      status = {'💻'}
    />
  </div>
}