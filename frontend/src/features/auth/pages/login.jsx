import React from 'react'
import "../auth.form.css"
const Login = () => {
  return (
    <main>
        <div className="container">
            <h1>Login</h1>
            <form>
                <div className="input-group">
                    <label htmlFor="Email">Email</label>
                    <input type="email" id="Email" placeholder='Enter your email address' />
                </div>
                <div className="input-group">
                    <label htmlFor="Password">Password</label>
                    <input type="password" id="Password" placeholder='Enter your password' />
                </div>
                <button className='btn btn-primary' type='submit'>Login</button>
            </form>
            {/* <p>Don't have an account? <Link to="/register">Register</Link></p> */}
        </div>
    </main>
  )
}

export default Login
