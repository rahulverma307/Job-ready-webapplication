import React, { useRef } from "react";

import "../auth.form.css";

const Login = () => {
  const clickSound = useRef(new Audio("../click.mp3"));

  const playClickSound = () => {
    clickSound.current.currentTime = 0;
    clickSound.current.play().catch(err => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    playClickSound();
    console.log("Login");
  };

  return (
    <main>
      <div className="container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="Email"
              placeholder="Enter your email address"
            />
          </div>

          <div className="input-group">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="Password"
              placeholder="Enter your password"
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Login
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;