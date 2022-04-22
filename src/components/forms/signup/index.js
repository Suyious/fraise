import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const SignUp = () => {
  return (
    <form className="auth form">
      <div className="auth_input">
        <input type="text" placeholder="username" />
      </div>
      <div className="auth_input">
        <input type="email" placeholder="email" />
      </div>
      <div className="auth_input">
        <input type="password" placeholder="password" />
      </div>
      <div className="auth_input">
        <input type="password" placeholder="Confirm Password" />
      </div>
      <div className="auth_button">
        <button>Login</button>
      </div>
      <div className="auth_bottom">
        <span>Already have an account? </span>
        <Link to="/fraise/login">Log In</Link>
      </div>
    </form>
  );
};

export default SignUp;
