import ModalBox from "../box"
import "./style.css"

const ModalFloatingStack = ({ elements, hideElement }) => {
  
  return (
    <div className="modal_floating_stack_wrapper">
      { elements.map(({title, description, id}) => <ModalBox key={id} title={title} description={description} setClose={() => hideElement(id)}/>) }
    </div>
  )
}
export default ModalFloatingStack
