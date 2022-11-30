import React, {useRef, useState} from 'react'
import {useMutation, useQueryClient} from 'react-query';
import {useNavigate} from 'react-router';
import SignUpForm from "../../components/forms/signup"
import axios from "../../utils/axios"
import parseError from '../../utils/parseError';

const SignUp = () => {

  const navigate = useNavigate();
  const username = useRef(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    const body = {
      username: username.current.value,
      name: name.current.value,
      email: email.current.value,
      password: password.current.value
    }

    if(password.current.value && password.current.value === confirmPassword.current.value ) {
      mutate(body, {
        onSuccess: () => {
          navigate('/');
        }
      });
    } else {
      setErrors({
        ...errors,
        confirmPassword: "the passwords do not match"
      })
    }
  }

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(( body ) => {
    const config = {
      headers: { "Content-Type": "application/json", withCredentials: true },
    };
    return axios.post('/signup', body , config)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries("me")
    },
    onError: (err) => {
      setErrors(parseError(err));
    }
  })

  return (
    <div className='signup main boxwidth'>
      <SignUpForm username={username} name={name} email={email}
        password={password} confirmPassword={confirmPassword}
        onSubmit={onSubmit} loading={isLoading} errors={errors}/>
    </div>
  )
}

export default SignUp
