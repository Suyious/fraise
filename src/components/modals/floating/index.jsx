import "./style.css"
import ModalBox from "../box"

const ModalFloating = ({element}) => {
  return(
    <div className="modal_floating_wrapper">
      <ModalBox title={element.title} description={element.description}></ModalBox>
    </div>
  )
}
export default ModalFloating
