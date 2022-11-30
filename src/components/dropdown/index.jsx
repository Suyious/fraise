import {useState} from "react"
import ClickToExit from "../clicktoexit";
import "./styles.css"

const Dropdown = ({visible, children}) => {

  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen((e) => !e);

  return(
    <div className="dropdown_wrapper">
      {open && <ClickToExit onClick={toggleOpen} className="click_to_exit"/> }
      <div className="dropdown_main">
        <div onClick={toggleOpen}>{visible}</div>
        {open && <ul onClick={toggleOpen} className="dropdown_children">
          {/* Any <li> is styled */}
          {children}
        </ul> }
      </div>
    </div>
  )
}
export default Dropdown
