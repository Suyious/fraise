import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Login = ({ onSubmit , email, password, loading }) => {
  return (
    <form onSubmit={onSubmit} className="auth form">
      <div className="auth_input">
        <input ref={email} type="email" placeholder="email" />
      </div>
      <div className="auth_input">
        <input ref={password} type="password" placeholder="password" />
      </div>
      <div className="auth_button">
        <button disabled={loading}>Login</button>
      </div>
      <div className="auth_bottom">
        <span>Don't have an account </span>
        <Link to="/signup">Sign up</Link>
      </div>
    </form>
  );
};

export default Login;
