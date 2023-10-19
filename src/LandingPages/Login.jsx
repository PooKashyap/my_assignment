import React from 'react'
import "./Login.css"

const Login = () => {
  return (
    <div>
    <div className="containerloginpage">
  <div className="login-container">
    <h2>Login</h2>
    <form>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" className="form-control" placeholder="Enter your username" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" className="form-control" placeholder="Enter your password" />
      </div>
      <button type="submit" className="btn btn-login">Login</button>
    </form>
  </div>
</div>

    </div>
  )
}

export default Login
