import "./style.css"
import React from "react"

const ConfirmButton = ({children, onClick=() => {}, disabled=false}) => {
  return(
    <button onClick={onClick} className="button_main" disabled={disabled}>
      {children}
    </button>
  )
}

export default ConfirmButton
