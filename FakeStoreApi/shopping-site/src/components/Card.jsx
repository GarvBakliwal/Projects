import React from 'react'
import './Card.css'
// import bgImage from './Assets/backgroundimage.png'

function Card(props) {
  return (
    <div className='Card'>
      <h1>{props.text}</h1>
      <img /* src={} */ alt=''/>
      <p></p>
    </div>
  )
}

export default Card