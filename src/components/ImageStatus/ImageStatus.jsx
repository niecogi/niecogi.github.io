import photo from '../../../static/images/profile.jpeg'

import './ImageStatus.css'

export default function ImageStatus({className, status = 0 }) {
  return <div>
    <img
      src={photo}
      className={className}/>
    <div className='user-badge'>
      <span className='status'>{status}</span>
    </div>

  </div>
}