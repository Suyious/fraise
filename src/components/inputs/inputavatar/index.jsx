import "./styles.css"
import React from "react"
import {ReactComponent as EditIcon} from "../../../assets/icons/edit.svg"
import {ReactComponent as TrashIcon} from "../../../assets/icons/delete.svg"
import {ReactComponent as UserIcon} from "../../../assets/icons/user.svg"

const AvatarInput = ({name, avatar, setAvatar}) => {

  const addAvatar = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      setAvatar(reader.result);
    }
    reader.readAsDataURL(e.target.files[0])
  }
  const removeAvatar = () => {
    setAvatar(null);
  }

  const avatarToURL = (avatar) => {
    if(typeof avatar === "string") {
      return avatar;
    }
    return URL.createObjectURL(avatar);
  }

  return(
    <div className="input_avatar">
      {avatar ? 
        <div className="input_avatar_image_container">
          <img src={avatarToURL(avatar)} alt="profile avatar for the user"/>
        </div>:
        <div className="input_avatar_placeholder">
          <UserIcon/>
        </div>
      }
      <div className="input_avatar_absolute">
        <label className="input_avatar_label">
          <EditIcon/>
          <input className="input_avatar_input_file" name={name} type="file" accept=".jpg, .jpeg, .png" onChange={addAvatar} />
        </label>
        {avatar && <div className="input_avatar_remove" onClick={removeAvatar}>
          <TrashIcon/>
      </div> }
      </div>
    </div>
  )
}
export default AvatarInput
