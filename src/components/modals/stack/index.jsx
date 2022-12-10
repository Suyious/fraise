import ModalBox from "../box"
import "./style.css"

const ModalFloatingStack = ({ elements, setElement }) => {

  const removeElement = (index) => {
    setElement(elems => elems.filter((_, i) => i !== index));
  }

  return(
    <div className="modal_floating_stack_wrapper">
      { elements.map(({title, description}, i) => <ModalBox key={i} title={title} description={description} setClose={() => removeElement(i)}/>) }
    </div>
  )
}
export default ModalFloatingStack
