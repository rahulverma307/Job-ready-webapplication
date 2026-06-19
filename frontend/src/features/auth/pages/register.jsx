import React, { useRef,useState } from "react";
import { useNavigate ,Link } from "react-router";
import {useAuth} from "../hooks/useAuth.js";
import "../auth.form.css";

const Register = () => {

  const {handleRegister,loading}=useAuth();
  const [username,setUsername]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  const clickSound = useRef(new Audio("../click.mp3"));

  const playClickSound = () => {
    clickSound.current.currentTime = 0;
    clickSound.current.play().catch((err) => console.log(err));
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister({username,email,password});

    playClickSound();
    navigate("/");
  };
if (loading) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #0f172a, #1e293b)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          animation: "fadeIn 0.8s ease-in-out",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            border: "6px solid rgba(255,255,255,0.2)",
            borderTop: "6px solid #38bdf8",
            borderRadius: "50%",
            margin: "0 auto 20px",
            animation: "spin 1s linear infinite",
          }}
        />

        <h1
          style={{
            color: "#fff",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          Loading...
        </h1>
      </div>
    </main>
  );
}
  return (
    <main>
      <div className="container">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
            onChange={(e)=>setUsername(e.target.value)}
              type="text"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
            onChange={(e)=>setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Register
          </button>
        </form>

        <p className="auth-link">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
};

export default Register;