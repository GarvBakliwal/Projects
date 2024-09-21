import React from 'react'
import {useNavigate} from 'react-router-dom'
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div>
        Home
        <button onClick={()=>(navigate('/form'))}>
          Login
        </button>
    </div>
  )
}

export default Homepage