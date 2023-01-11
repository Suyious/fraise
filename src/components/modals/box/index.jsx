import "./style.css"
import LoaderDots from "../../animation/loadingimage"
import {ReactComponent as CloseIcon} from "../../../assets/icons/close.svg"
import {useState} from "react"

const ModalBox = ({title, description, visible = true, setClose}) => {
  // this is not absolute positioned,
  // it only floats inside a floating modal

  return(
    <> { visible &&
      <div className="modal_box_wrapper">
        <div onClick={() => setClose()} className="modal_box_close">
        <CloseIcon/>
        </div>
        <div className="modal_box_main">
        <LoaderDots/>
          <div className="modal_box_children">
          <h3>{title}</h3>
          <p>{description}</p>
          </div>
        </div>
      </div>
      } </>
  )
}
export default ModalBox
