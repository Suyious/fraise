import React from "react";
import "./style.css";

const Editable = (
  {className, placeholder="", role="text", name="", value, onChange}
) => {

  return(
    <div
      className={`editable_main ${value === '' ? "editable_empty" : "" } ${className}`}
      contentEditable="true"
      role={role}
      placeholder={placeholder}
      name={name}
      onInput={onChange}
      onBlur={onChange}
    >{value}</div>
  )
}
export default Editable

