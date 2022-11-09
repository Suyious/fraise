import React, {useRef} from 'react'
import {useQuery} from 'react-query';
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
      console.log("ok", {
      username: username.current.value,
      name: name.current.value,
      email: email.current.value,
      password: password.current.value
    });
      refetch();
    } else {
      console.log("mismatch");
    }
  }

  const { isLoading, refetch, isError, error } = useQuery('signup', () => {

    const config = {
      headers: { "Content-Type": "application/json", withCredentials: true },
    };
    return axios.post('/signup', {
      username: username.current.value,
      name: name.current.value,
      email: email.current.value,
      password: password.current.value
    }, config)
  }, { enabled: false })

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
