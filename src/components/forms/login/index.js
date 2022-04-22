import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Login = () => {
  return (
    <form className="auth form">
      <div className="auth_input">
        <input type="email" placeholder="email" />
      </div>
      <div className="auth_input">
        <input type="password" placeholder="password" />
      </div>
      <div className="auth_button">
        <button>Login</button>
      </div>
      <div className="auth_bottom">
        <span>Don't have an account </span>
        <Link to="/fraise/signup">Sign up</Link>
      </div>
    </form>
  );
};

export default Login;
