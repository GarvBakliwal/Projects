import React, { useState } from "react";
import "./style.css"; // Import your CSS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

const AuthForm = () => {
  const [isActive, setIsActive] = useState(false); // State to manage form toggle

  // Function to handle form toggle between Sign In and Sign Up
  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`container ${isActive ? "active" : ""}`} id="container">
      {/* Sign Up Form */}
      <div className="form-container sign-up">
        <form action="">
          <h1>Create Account</h1>
          <div className="social-icons">
            <a href="#" className="icons"><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
          <span>Or Use your Email for Registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign up</button>
        </form>
      </div>

      {/* Sign In Form */}
      <div className="form-container sign-in">
        <form action="">
          <h1>Sign In</h1>
          <div className="social-icons">
            <a href="#" className="icons"><FontAwesomeIcon icon={faGooglePlusG} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="#" className="icons"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
          <span>Or Use your Email & Password</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
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