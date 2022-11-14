import React from "react";
import { Link } from "react-router-dom";
import ConfirmButton from "../../buttons/confirm";
import InputBox from "../../inputs/inputbox";
import "../styles.css";

const Login = ({ onSubmit , email, password, loading }) => {
  return (
    <form onSubmit={onSubmit} className="auth form">
      <InputBox name="email" input_ref={email} type="email" placeholder="Email" label="email" variant="email" />
      <InputBox input_ref={password} name="password" type="password" placeholder="Password" label="password" variant="password"/>
      <ConfirmButton disabled={loading}>{ loading ? "Logging you in..." : "Login" }</ConfirmButton>
      <div className="auth_bottom">
        <span>Don't have an account </span>
        <Link to="/signup">Sign up</Link>
      </div>
    </form>
  );
};

export default Login;
