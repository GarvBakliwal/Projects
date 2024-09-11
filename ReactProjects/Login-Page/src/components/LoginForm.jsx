import React, { useState } from 'react'
import '../styles/LoginForm.css'
const LoginForm = () => {
  const [submitAction,setSubmitAction] = useState('Login');
  const [footerText,setfooterText] = useState('Don\'t have an Account?');
  const [buttonText,setButtonText] = useState('Sign up for free');
  const [visibility,setVisibility] = useState('none');
  const [hidden,setHidden] = useState('flex');
  const [welcomeText,setWelcomeText] = useState('Welcome back! Enter your Details')
  const handleClick = ()=>{
    if (submitAction==='Login') {
      setSubmitAction('Register')
      setWelcomeText('Create an account to get Started!')
      setButtonText('Sign in')
      setfooterText('Already have an Account? ')
      setVisibility('block')
      setHidden('none')
    } else if (submitAction==='Register') {
      setSubmitAction('Login')
      setWelcomeText('Welcome back! Enter your Details')
      setButtonText('Sign up for free')
      setfooterText('Don\'t have an Account?')
      setVisibility('none')
      setHidden('flex')
    }
  }
  return (
    <div className='container'>
      <h2>{submitAction}</h2>
      <p>{welcomeText}</p>
      <form className='input-form'>
        <input type="text" placeholder='First Name' className="input-box" style={{display:visibility}} />
        <input type="text" placeholder='Last Name' className="input-box" style={{display:visibility}}/>
        <input type="email" placeholder='Email' className="input-box" />
        <input type="password" placeholder='Password' className="input-box" />
        <div className='input-remember'style={{display:hidden}}>
          <div id='remember-me-checkbox' >
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Remember me</label>
          </div>
          <p><a href="#">Forgot Password ?</a></p>
        </div>
        <div className='submit-buttons'>
          <button>{submitAction}</button>
          {/* <button>Register</button> */}
          <p>or</p>
          <button>Sign in with Google</button>
        </div>
      </form>
      <div className="footer">
        {footerText} <button className='register-button' onClick={()=>handleClick()}>{buttonText}</button>
      </div>
    </div>
  )
}

export default LoginForm