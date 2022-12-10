import "./style.css"
import LoaderDots from "../../animation/loadingimage"
import {ReactComponent as CloseIcon} from "../../../assets/icons/close.svg"

const ModalBox = ({title, description, setClose}) => {
  // this is not absolute positioned,
  // it only floats inside a floating modal
  return(
    <div className="modal_box_wrapper">
      <div onClick={setClose} className="modal_box_close">
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
  )
}
export default ModalBox
