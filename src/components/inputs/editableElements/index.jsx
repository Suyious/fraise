import React, {useState} from "react";
import "./styles.css";

const Editable = (
  { className, placeholder="", role="text", name="", input_ref, onChange }
) => {

  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const setPlaceholder = (e) => {
    setShowPlaceholder(e.target.innerText.trim() === "")
  }

  const onInput = (e) => {
    if(onChange) onChange(e);
    setPlaceholder(e)
  }

  // moving the switch case to another component will lead to re-renders
  // you are adviced to expect things to not work if that is done
  switch(role) {
    case "text":
      return(
        <div className="editable_wrapper">
          {showPlaceholder && <div className="editable_placeholder">{placeholder}</div> }
          <div className={`editable_main ${className}`} contentEditable="true" ref={input_ref} name={name} onInput={onInput} />
        </div>
      )
    case "head":
      return(
        <div className="editable_wrapper">
          {showPlaceholder && <h1 className="editable_placeholder">{placeholder}</h1> }
          <h1 className={`editable_main ${className}`} contentEditable="true" ref={input_ref} name={name} onInput={onInput} />
        </div>
      )
    case "para":
      return(
        <div className="editable_wrapper">
          {showPlaceholder && <p className="editable_placeholder">{placeholder}</p> }
          <p className={`editable_main ${className}`} contentEditable="true" ref={input_ref} name={name} onInput={onInput} />
        </div>
      )
    case "quote":
      return(
        <div className="editable_wrapper">
          {showPlaceholder && <blockquote className="editable_placeholder">{placeholder}</blockquote> }
          <blockquote className={`editable_main ${className}`} contentEditable="true" ref={input_ref} name={name} onInput={onInput} />
        </div>
      )
    case "code":
      return(
        <div className="editable_wrapper">
          {showPlaceholder && <code className="editable_placeholder">{placeholder}</code> }
          <code className={`editable_main ${className}`} contentEditable="true" ref={input_ref} name={name} onInput={onInput} />
        </div>
      )
    default:
      return(
        <div className="editable_wrapper">
          {showPlaceholder && <div className="editable_placeholder">{placeholder}</div> }
          <div className={`editable_main ${className}`} contentEditable="true" ref={input_ref} name={name} onInput={onInput} />
        </div>
      )
  }

}
export default Editable

