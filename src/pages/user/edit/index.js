import "./styles.css"
import React, {useRef} from "react"
import InputBox from "../../../components/inputs/inputbox"
import ConfirmButton from "../../../components/buttons/confirm"

const EditProfile = () => {

  const email = useRef(null);

  const onChange = () => {
    console.log(email.current.value);
  }

  return(
    <div className="boxwidth main">
      <InputBox name="name" placeholder="Name" type="text" label="name" variant="name" input_ref={email} onChange={onChange}/>
      <InputBox name="name" placeholder="Username" type="text" label="username" variant="username"/>
      <InputBox name="email" placeholder="Email" type="email" label="email" variant="email"/>
      <InputBox name="password" placeholder="Password" type="password" label="password" variant="password"/>
      <InputBox name="password" placeholder="Confirm Password" type="password" label="confirm password" variant="password"/>
      <ConfirmButton>Confirm</ConfirmButton>
    </div>
  )
}

export default EditProfile
