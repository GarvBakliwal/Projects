import React, { useState } from 'react'
import '../styles/MainRight.css'
import LoginForm from './LoginForm'
const MainRight = () => {
  const [action,setAction] = useState('Login')
  return (
    <div className='container'>
      <div className='header'>
        Interactive Brand
      </div>
      <LoginForm/>
      
    </div>
  )
}

export default MainRight