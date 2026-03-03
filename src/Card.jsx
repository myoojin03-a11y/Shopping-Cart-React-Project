import React from 'react'
//refce 단축키
export const Card = ({name, role}) => {
  return (
    <div style={{
      border: "1px solid red",
      borderRadius: 10,
      padding:"1rem",
      width:200
    }}>
      <p style={{fontWeight:'bold'}}>{name}</p>
      <p className='text'>{role}</p>
    </div>
  )
}
