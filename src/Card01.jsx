import React from 'react'
import {useState} from 'react'

const Card01 = ({ name, job, icon }) => {
  let [liked, setLiked] = useState(false);
  return (
    <div className='card'>
      <p>{icon}</p>
      <h4>{name}</h4>
      <p>{job}</p>
      <button
      onClick={()=>setLiked(!liked)}
      style={{
        background : liked ? 'pink':'gray',
        color : liked ? 'red':'white',
        borderRadius : 20,
        padding : '0.5rem 1.2rem',
        border : 'none'
      }}
      >{liked ? '❤좋아요':'💥별로에요'}</button>
    </div>
  )
}

export default Card01