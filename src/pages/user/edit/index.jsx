import "./styles.css"
import React, {useRef, useState} from "react"
import InputBox from "../../../components/inputs/inputbox"
import ConfirmButton from "../../../components/buttons/confirm"
import AvatarInput from "../../../components/inputs/inputavatar"
import {useMutation, useQuery} from "react-query"
import axios from "../../../utils/axios"

const EditProfile = () => {

  const name = useRef(null);
  const username = useRef(null);
  const email = useRef(null);
  const form = useRef(null);
  const [avatar, setAvatar] = useState(null);

  useQuery('me-edit', () => {
    return axios.get('/me');
  }, {
    onSuccess: (data) => {
      if(data.data.user.name) {
        name.current.value = data.data.user.name;
        username.current.value = data.data.user.username;
        email.current.value = data.data.user.email;
        if(data.data.user.avatar.url) setAvatar(data.data.user.avatar.url);
      }
    },
    refetchOnWindowFocus: false
  })

  const { mutate } = useMutation((body) => {
    const config = {
      headers: { "Content-Type": "application/json", withCredentials: true },
    };
    return axios.put('/me', body, config);
  })

  const onSubmit = (e) => {
    e.preventDefault();
    const body = new FormData(form.current);
    console.log(body);
    mutate(body)
  }

  return(
    <form ref={form} onSubmit={onSubmit} className="profile_edit boxwidth main">
      <div className="profile_avatar">
        <AvatarInput avatar={avatar} setAvatar={setAvatar}/>
      </div>
      <InputBox input_ref={name} name="name" placeholder="Name" type="text" label="name" variant="name"/>
      <InputBox input_ref={username} name="username" placeholder="Username" type="text" label="username" variant="username"/>
      <InputBox input_ref={email} name="email" placeholder="Email" type="email" label="email" variant="email"/>
      <ConfirmButton>Save</ConfirmButton>
    </form>
  )
}

export default EditProfile
