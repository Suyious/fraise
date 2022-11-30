import React, {useRef, useState} from 'react'
import Loginform from "../../components/forms/login"
import { useMutation, useQueryClient } from "react-query"
import {useNavigate} from 'react-router'
import axios from "../../utils/axios"
import parseError from '../../utils/parseError'

const Login = () => {

  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);
  const [errors, setErrors] = useState({});

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
    },
    onError: (err) => {
      setErrors(parseError(err))
    }
  })

  return (
    <div className='login main boxwidth'>
      <Loginform email={email} password={password} onSubmit={onSubmit} loading={isLoading} errors={errors}/>   
    </div>
  )
}

export default Login
