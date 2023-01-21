import React, {Fragment} from "react"
import photo from '../../../static/images/profile.jpeg'

export default function ImageStatus({className, statusText, statusImg}) {
  return <div>
    <img
      src={photo}
      className={className}/>
    <div className='user-status-circle-badge-container'>
      <div className='user-badge-status'>
        <span>💻</span>
      </div>
    </div>
  </div>
}