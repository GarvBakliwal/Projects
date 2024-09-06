import React from 'react'
import '../styles/MainRight.css'
import LoginForm from './LoginForm'
const MainRight = () => {
  return (
    <div className='container'>
      <div className='header'>
        Interactive Brand
      </div>
      <LoginForm/>
      <div className="footer">
        Dont have a account? <a href="#">Sign up for free</a>
      </div>
    </div>
  )
}

export default MainRight