import React, { useRef,useState } from "react";
import { useNavigate ,Link } from "react-router";
import { useAuth } from "../hooks/useAuth.js";

import "../auth.form.css";

const Login = () => {
  const {handleLogin,loading}=useAuth();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const navigate=useNavigate()
  const clickSound = useRef(new Audio("../click.mp3"));

  const playClickSound = () => {
    clickSound.current.currentTime = 0;
    clickSound.current.play().catch(err => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
     playClickSound();
    handleLogin({email,password})

    navigate("/")

   
  };

  if(loading){
    return <div>Loading...</div>
  }

  return (
    <main>
      <div className="container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="Email">Email</label>
            <input
            
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              id="Email"
              placeholder="Enter your email address"
            />
          </div>

          <div className="input-group">
            <label htmlFor="Password">Password</label>
            <input
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              id="Password"
              placeholder="Enter your password"
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
        <p className="auth-link">
           Don't have an Account? <Link to="/register">Register</Link>
        </p>
      </div>
    </main>
  );
};

export default Login;