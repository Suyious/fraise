import React from "react";
import { Link } from "react-router-dom";
import ConfirmButton from "../../buttons/confirm";
import ErrorCard from "../../errors/card";
import InputBox from "../../inputs/inputbox";
import "../styles.css";

const Login = ({ onSubmit , email, password, loading, errors }) => {
  return (
    <form onSubmit={onSubmit} className="auth form">
      <InputBox name="email" input_ref={email} type="email" placeholder="Email" label="email" variant="email" error={errors.email}/>
      <InputBox input_ref={password} name="password" type="password" placeholder="Password" label="password" variant="password" error={errors.password}/>
      <ConfirmButton disabled={loading}>{ loading ? "Logging you in..." : "Login" }</ConfirmButton>
      {errors.user && <ErrorCard message={errors.user}/>}
      <div className="auth_bottom">
        <span>Don't have an account </span>
        <Link to="/signup">Sign up</Link>
      </div>
    </form>
  );
};

export default Login;
