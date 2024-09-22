import React from 'react'
import '../style/Card.css'

function Card(props) {
  return (
    <div className='Card'>
      <img  src={props.image}  alt=''/>
      <p>{props.name}</p>
      <p>${props.price}</p>
    </div>
  )
}

export default Card