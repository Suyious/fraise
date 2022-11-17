import "./styles.css"
import React, {useEffect, useRef, useState} from "react"
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
  const [data, setData] = useState({});

  useEffect(() => {
    if(Object.keys(data).length !== 0){
      name.current.value = data.name;
      username.current.value = data.username;
      email.current.value = data.email;
      if(data.avatar && data.avatar.url)
        setAvatar(data.avatar.url);
    }
  }, [data])

  useQuery('me-edit', () => {
    return axios.get('/me');
  }, {
    onSuccess: (data) => {
      if(data.data.user) {
        setData(data.data.user);
      }
    },
    refetchOnWindowFocus: false
  })

  const { isLoading, mutate } = useMutation((body) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data", withCredentials: true },
    };
    return axios.put('/me', body, config);
  })

  const onSubmit = (e) => {
    e.preventDefault();
    const body = new FormData(form.current);
    if(body.get("name") === data.name) body.delete("name")
    if(body.get("username") === data.username) body.delete("username")
    if(body.get("email") === data.email) body.delete("email")
    if(avatar === data.avatar.url || avatar === null)
      body.delete("avatar")
    else 
      body.set("avatar", avatar);
    console.table([...body]);
    mutate(body)
  }

  return(
    <form ref={form} onSubmit={onSubmit} className="profile_edit boxwidth main">
      <div className="profile_avatar">
        <AvatarInput name="avatar" avatar={avatar} setAvatar={setAvatar}/>
      </div>
      <InputBox input_ref={name} name="name" placeholder="Name" type="text" label="name" variant="name"/>
      <InputBox input_ref={username} name="username" placeholder="Username" type="text" label="username" variant="username"/>
      <InputBox input_ref={email} name="email" placeholder="Email" type="email" label="email" variant="email"/>
      <ConfirmButton disabled={isLoading}>{isLoading ? "Saving" : "Save"}</ConfirmButton>
    </form>
  )
}

export default EditProfile
