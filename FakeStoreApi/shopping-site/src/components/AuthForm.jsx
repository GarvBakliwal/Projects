// import React, { useState } from "react";
// import "../style/AuthForm.css"; // Import your CSS
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGooglePlusG, faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
// import {useNavigate} from 'react-router-dom'
// const AuthForm = () => {
//   const [isActive, setIsActive] = useState(false); // State to manage form toggle

//   // Function to handle form toggle between Sign In and Sign Up

//   const registerSchema = z.object({
//     name: z.string().min(1, "Name is required").max(40, "Name cannot exceed 40 characters"),
//     email: z.string().email("Invalid email format"),
//     phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number cannot exceed 15 digits"),
//     password: z.string().min(6, "Password must be at least 6 characters")
//   });

//   const loginSchema = z.object({
//     email: z.string().email("Invalid email format"),
//     password: z.string().min(6, "Password must be at least 6 characters")
//   });
//   const [schema, setSchema] = useState(true);

//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     console.log(data)
//     // navigate("/");
//   };

//   const handleToggle = () => {
//     setIsActive(!isActive)
//     setSchema(!schema)
//   };
//   var { register, formState: { errors }, handleSubmit } = useForm({ resolver: zodResolver(schema?loginSchema:registerSchema) });

//   return (
//     <div className={`container ${isActive ? "active" : ""}`} id="container">
//       {/* Sign Up Form */}
//       <div className="form-container sign-up">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <h1>Create Account</h1>
//           <div className="social-icons">
//             <a href="#" className="icons"><FontAwesomeIcon icon={faGooglePlusG} /></a>
//             <a href="#" className="icons"><FontAwesomeIcon icon={faFacebookF} /></a>
//             <a href="#" className="icons"><FontAwesomeIcon icon={faGithub} /></a>
//             <a href="#" className="icons"><FontAwesomeIcon icon={faTwitter} /></a>
//           </div>
//           <span>Or Use your Email for Registration</span>
//           <input type="text" placeholder="Name" {...register('name')} />
//           {errors.name && <div id="error">{errors.name.message}</div>}

//           <input type="email" placeholder="Email" {...register('email')} />
//           {errors.email && <div id="error">{errors.email.message}</div>}

//           <input type="tel" placeholder="Phone" {...register('phone')} />
//           {errors.phone && <div id="error">{errors.phone.message}</div>}

//           <input type="password" placeholder="Password" {...register('password')} />
//           {errors.password && <div id="error">{errors.password.message}</div>}

//           <button type="submit">Sign up</button>
//         </form>
//       </div>

//       {/* Sign In Form */}
//       <div className="form-container sign-in">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <h1>Sign In</h1>
//           <div className="social-icons">
//             <a href="#" className="icons"><FontAwesomeIcon icon={faGooglePlusG} /></a>
//             <a href="#" className="icons"><FontAwesomeIcon icon={faFacebookF} /></a>
//             <a href="#" className="icons"><FontAwesomeIcon icon={faGithub} /></a>
//             <a href="#" className="icons"><FontAwesomeIcon icon={faTwitter} /></a>
//           </div>
//           <span>Or Use your Email & Password</span>

//           <input type="email" placeholder="Email" {...register('email')} />
//           {errors.email && <div id="error">{errors.email.message}</div>}
//           <input type="password" placeholder="Password" {...register('password')} />
//           {errors.password && <div id="error">{errors.password.message}</div>}
//           <a href="#">Forgot your Password?</a>

//           <button type="submit">Sign in</button>
//         </form>
//       </div>

//       {/* Toggle between Sign In and Sign Up */}
//       <div className="toggle-container">
//         <div className="toggle">
//           <div className="toggle-panel toggle-left">
//             <h1>Welcome Back!</h1>
//             <p>Enter your Personal Details to use all of the Site Features</p>
//             <button className="hidden" id="login" onClick={handleToggle}>
//               Sign in
//             </button>
//           </div>
//           <div className="toggle-panel toggle-right">
//             <h1>Hello Friend!</h1>
//             <p>Register with your Personal Details to use all of the Site Features</p>
//             <button className="hidden" id="register" onClick={handleToggle}>
//               Sign up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthForm;

import React, { useState, useEffect } from "react";
import "../style/AuthForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGooglePlusG, faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from 'sonner'
const AuthForm = () => {
  const [isActive, setIsActive] = useState(false); // State to toggle between Sign In and Sign Up forms
  const [isRegistering, setIsRegistering] = useState(false); // State to manage schema

  const navigate = useNavigate();

  // Zod schemas for validation
  const registerSchema = z.object({
    name: z.string().min(1, "Name is required").max(40, "Name cannot exceed 40 characters"),
    email: z.string().email("Invalid email format"),
    phone: z.string().min(10, "Phone number must be at least 10 digits").max(15, "Phone number cannot exceed 15 digits"),
    password: z.string().min(6, "Password must be at least 6 characters")
  });

  const loginSchema = z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters")
  });

  // Dynamic schema resolver based on state
  const schema = isRegistering ? registerSchema : loginSchema;

  // Initialize useForm with dynamic resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(schema),
  });

  // Handle form submission
  const onSubmit = async (data) => {
    // console.log(data);
    if (schema == loginSchema) {
      try {
        const response = await axios.post('http://localhost:8000/api/login', data);
        toast.success("User Logged in Successfully");
        navigate("/");
      } catch (error) {
        toast.error(error.response.data);
      }
    }
    else if (schema == registerSchema) {
      try {
        const response = await axios.post('http://localhost:8000/api/create', data);
        toast.success("User registered Successfully");
        navigate("/");
      } catch (error) {
        toast.error(error.response.data);
      }
    }
  };

  // Toggle between Sign In and Sign Up form
  const handleToggle = () => {
    setIsActive(!isActive);
    setIsRegistering(!isRegistering); // Switch schema
    reset(); // Reset form fields when toggling forms
  };

  return (
    <div id="wrapper">

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

            {isRegistering && (
              <>
                <input type="text" placeholder="Name" {...register("name")} />
                {errors.name && <div className="error">{errors.name.message}</div>}

                <input type="tel" placeholder="Phone" {...register("phone")} />
                {errors.phone && <div className="error">{errors.phone.message}</div>}
              </>
            )}

            <input type="email" placeholder="Email" {...register("email")} />
            {errors.email && <div className="error">{errors.email.message}</div>}

            <input type="password" placeholder="Password" {...register("password")} />
            {errors.password && <div className="error">{errors.password.message}</div>}

            <button type="submit">{isRegistering ? "Sign up" : "Sign in"}</button>
          </form>
        </div>

        {/* Sign In Form */}
        <div className="form-container sign-in">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>{isRegistering ? "Sign In" : "Sign Up"}</h1>
            <div className="social-icons">
              <a href="#" className="icons"><FontAwesomeIcon icon={faGooglePlusG} /></a>
              <a href="#" className="icons"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="#" className="icons"><FontAwesomeIcon icon={faGithub} /></a>
              <a href="#" className="icons"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>
            <span>Or Use your Email & Password</span>

            {!isRegistering && (
              <>
                <input type="email" placeholder="Email" {...register("email")} />
                {errors.email && <div className="error">{errors.email.message}</div>}

                <input type="password" placeholder="Password" {...register("password")} />
                {errors.password && <div className="error">{errors.password.message}</div>}
              </>
            )}

            <button type="submit">{isRegistering ? "Sign in" : "Sign up"}</button>
          </form>
        </div>

        {/* Toggle between Sign In and Sign Up */}
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of the site features.</p>
              <button className="hidden" onClick={handleToggle}>
                {isRegistering ? "Sign In" : "Sign Up"}
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Hello Friend!</h1>
              <p>Register with your personal details to use all of the site features.</p>
              <button className="hidden" onClick={handleToggle}>
                {isRegistering ? "Sign Up" : "Sign In"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;