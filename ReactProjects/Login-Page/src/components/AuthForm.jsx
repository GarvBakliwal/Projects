import React, { useState } from "react";
import "../styles/AuthForm.css"; // Import your CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
const AuthForm = () => {
  const [isActive, setIsActive] = useState(false); // State to manage form toggle

  // Function to handle form toggle between Sign In and Sign Up
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const {register,handleSubmit} = useForm();

  const onSubmit = (data) => console.log(data);
  

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icons"><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
          <span>Or Use your Email for Registration</span>
          <input type="text" placeholder="Name" {...register('name')} />
          <input type="email" placeholder="Email" {...register('email')} />
          <input type="tel" placeholder="Phone" {...register('phone')} />
          <input type="password" placeholder="Password" {...register('password')} />
          <button type="submit">Sign up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icons"><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
          <span>Or Use your Email & Password</span>

          <input type="email" placeholder="Email" {...register('email')}/>

          <input type="password" placeholder="Password" {...register('password')} />

          <a href="#">Forgot your Password?</a>

          <button type="submit">Sign in</button>
        </form>
      </div>

      {/* Toggle between Sign In and Sign Up */}
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your Personal Details to use all of the Site Features</p>
            <button className="hidden" id="login" onClick={handleToggle}>
              Sign in
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Hello Friend!</h1>
            <p>Register with your Personal Details to use all of the Site Features</p>
            <button className="hidden" id="register" onClick={handleToggle}>
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;