import React, {useRef} from 'react'
import Loginform from "../../components/forms/login"
import { useMutation, useQueryClient } from "react-query"
import axios from "../../utils/axios"
import {useNavigate} from 'react-router'

const Login = () => {

  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    mutate({
      email: email.current.value,
      password: password.current.value
    }, {
      onSuccess: () => {
        navigate('/');
      }
    });
  }

  const queryClient = useQueryClient();
  const { isLoading, mutate } = useMutation(( body ) => {
    const config = {
      headers: { "Content-Type": "application/json", withCredentials: true },
    };
    return axios.post('/signin', body, config)
  }, {
    onSuccess: () => {
      queryClient.invalidateQueries("me")
    }
  })

  return (
    <div className='login main boxwidth'>
      <Loginform email={email} password={password} onSubmit={onSubmit} loading={isLoading}/>   
    </div>
  )
}

export default Login
