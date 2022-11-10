import React, {useRef} from 'react'
import {useMutation} from 'react-query';
import SignUpForm from "../../components/forms/signup"
import axios from "../../utils/axios"

const SignUp = () => {

  const username = useRef(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    if(password.current.value && password.current.value === confirmPassword.current.value ) {
      mutate({
        username: username.current.value,
        name: name.current.value,
        email: email.current.value,
        password: password.current.value
      });
    } else {
      console.log("mismatch");
    }
  }

  const { isLoading, mutate, isError, error } = useMutation(( body ) => {
    const config = {
      headers: { "Content-Type": "application/json", withCredentials: true },
    };
    return axios.post('/signup', body , config)
  })

  return (
    <div className='signup main boxwidth'>
      <SignUpForm username={username} name={name} email={email}
        password={password} confirmPassword={confirmPassword}
        onSubmit={onSubmit} loading={isLoading}/>
      {isError && <div>{ error.message }</div>}
    </div>
  )
}

export default SignUp
