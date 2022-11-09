import React, {useRef} from 'react'
import Loginform from "../../components/forms/login"
import { useQuery } from "react-query"
import axios from "../../utils/axios"

const Login = () => {

  const email = useRef(null);
  const password = useRef(null);
  const onSubmit = (e) => {
    e.preventDefault();
    refetch();
  }

  // const { isLoading, data, isError, error, refetch } = useQuery('login', () => {
  const { isLoading, refetch } = useQuery('login', () => {
    const config = {
      headers: { "Content-Type": "application/json", withCredentials: true },
    };
    return axios.post('/signin', {
      email: email.current.value,
      password: password.current.value
    }, config)
  }, { enabled: false })

  return (
    <div className='login main boxwidth'>
      <Loginform email={email} password={password} onSubmit={onSubmit} loading={isLoading}/>   
    </div>
  )
}

export default Login
