import React from "react";
import { Link } from "react-router-dom";
import ConfirmButton from "../../buttons/confirm";
import InputBox from "../../inputs/inputbox";
import "../styles.css";

const SignUp = ({ username, name, email, password, confirmPassword, onSubmit=() => {}, loading, errors }) => {
  return (
    <form onSubmit={onSubmit} className="auth form">
      <div className="auth_input">
        <InputBox input_ref={username} type="text" placeholder="Username" name="username" label="username" variant="username" error={errors.username}/>
      </div>
      <div className="auth_input">
        <InputBox input_ref={name} type="text" placeholder="Name" name="name" label="name" variant="name" error={errors.name}/>
      </div>
      <div className="auth_input">
        <InputBox input_ref={email} type="email" placeholder="email" label="email" variant="email" error={errors.email}/>
      </div>
      <div className="auth_input">
        <InputBox input_ref={password} type="password" placeholder="Password" label="password" variant="password" error={errors.password}/>
      </div>
      <div className="auth_input">
        <InputBox input_ref={confirmPassword} type="password" placeholder="Confirm Password" label="confirm password" variant="password" error={errors.confirmPassword}/>
      </div>
      <div className="auth_button">
        <ConfirmButton disabled={loading}>{loading ? "Signing you up" : "Sign Up" }</ConfirmButton>
      </div>
      <div className="auth_bottom">
        <span>Already have an account? </span>
        <Link to="/login">Log In</Link>
      </div>
    </form>
  );
};

export default SignUp;
