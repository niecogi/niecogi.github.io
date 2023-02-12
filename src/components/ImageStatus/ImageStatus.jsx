import React, {Fragment} from "react"
import photo from '../../../static/images/profile.jpeg'

import './ImageStatus.css'

export default function ImageStatus({className, statusText, statusImg}) {
  return <div>
    <img
      src={photo}
      className={className}/>
    <div className='user-badge'>
      <span className='status'>💻</span>
    </div>


  </div>
}