import React, { useRef } from "react";
import { Link } from "react-router";
import { useNavigate } from "react-router";
import "../auth.form.css";

const Register = () => {
  const navigate = useNavigate();
  const clickSound = useRef(new Audio("../click.mp3"));

  const playClickSound = () => {
    clickSound.current.currentTime = 0;
    clickSound.current.play().catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    playClickSound();

    console.log("Register");
  };

  return (
    <main>
      <div className="container">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
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