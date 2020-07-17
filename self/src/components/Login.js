import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
  render() {
    return (
      <div className="container" id="container">
        <div className="form-container sign-up-container"></div>
        <form action="#">
          <img src={require("src/images/testA.png")} width="60" height="60" />
          <h1>Coffee In</h1>
          <div className="social-container"></div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
        <div className="overlay-container"></div>
      </div>
    );
  }
}

export default Login;
