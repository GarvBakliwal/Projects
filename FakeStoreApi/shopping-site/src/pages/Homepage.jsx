import React from 'react'
import {useNavigate} from 'react-router-dom'
import AllProducts from '../components/AllProducts';
const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className='home-container'>
        Home
        <button onClick={()=>(navigate('/form'))}>Login</button>
        <AllProducts/>
    </div>
  )
}

export default Homepage