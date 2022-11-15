import "./styles.css"
import React, {useState} from "react"
import {ReactComponent as UserIcon } from "../../../assets/icons/user.svg"
import {ReactComponent as EmailIcon } from "../../../assets/icons/mail.svg"
import {ReactComponent as AtIcon } from "../../../assets/icons/at.svg"
import {ReactComponent as StarIcon } from "../../../assets/icons/asterisk.svg"
import {ReactComponent as EyeOpen} from "../../../assets/icons/eyeopen.svg"
import {ReactComponent as EyeClose} from "../../../assets/icons/eyeclose.svg"

const InputIcon = ({variant}) => {
  switch(variant){
    case "email":
      return <EmailIcon/>
    case "username":
      return <AtIcon/>
    case "name":
      return <UserIcon/>
    case "password":
      return <StarIcon/>
    default:
      return null
  }
}

const EyeIcon = ({open}) => {
  if(open) {
    return <EyeClose/>
  } else {
    return <EyeOpen/>
  }
}

const InputBox = ({input_ref=null, name="", type="", placeholder="", label="", variant, onChange=() => {}, error=""}) => {

  const [passwordShow, setPasswordShow] = useState(false);
  const togglePassword = () => {
    setPasswordShow((prev) => !prev);
  }

  const getType = (type) => {
    if(type === "password") {
      return passwordShow ? "text" : "password";
    }
    return type;
  }

  return (
    <div className="inputbox">
      {error && <div className="inputbox_error">{error}</div>}
      <label className="inputbox_label">{label}
        <div className={ `inputbox_input ${error ? "error": ""}` }>
          <div className="inputbox_icon left">
            <InputIcon variant={variant}/>
          </div>
          <input ref={input_ref} name={name} type={getType(type)} placeholder={placeholder} onChange={onChange} />
          {variant==="password" && 
            <div onClick={togglePassword} className="inputbox_icon right">
              <EyeIcon open={passwordShow}/>
            </div> }
        </div>
      </label>
    </div>
  )
}

export default InputBox
