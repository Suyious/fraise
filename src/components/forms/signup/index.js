import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const SignUp = ({ username, name, email, password, confirmPassword, onSubmit=() => {}, loading }) => {
  return (
    <form onSubmit={onSubmit} className="auth form">
      <div className="auth_input">
        <input ref={username} type="text" placeholder="username" />
      </div>
      <div className="auth_input">
        <input ref={name} type="text" placeholder="name" />
      </div>
      <div className="auth_input">
        <input ref={email} type="email" placeholder="email" />
      </div>
      <div className="auth_input">
        <input ref={password} type="password" placeholder="password" />
      </div>
      <div className="auth_input">
        <input ref={confirmPassword} type="password" placeholder="Confirm Password" />
      </div>
      <div className="auth_button">
        <button disabled={loading}>Sign Up</button>
      </div>
      <div className="auth_bottom">
        <span>Already have an account? </span>
        <Link to="/login">Log In</Link>
      </div>
    </form>
  );
};

export default SignUp;
