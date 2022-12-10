import React, {useState} from "react";
import "./styles.css";
import { ReactComponent as ImageIcon } from "../../../assets/icons/image.svg"
import {ReactComponent as TrashIcon} from "../../../assets/icons/delete.svg"
import CallToActionButton from "../../buttons/calltoaction";
import ModalFloating from "../../modals/floating";
import useImageUpload from "../../../hooks/mutation/useImageUpload";

const Editable = (
  { className, placeholder="", role="text", name="", input_ref, onChange, image, setImage }
) => {

  const [showPlaceholder, setShowPlaceholder] = useState(true);

  const setPlaceholder = (e) => {
    setShowPlaceholder(e.target.innerText.trim() === "")
  }

  const onInput = (e) => {
    if(onChange) onChange(e);
    setPlaceholder(e)
  }

  // image editable
  const { isLoading: isUploading, mutate: mutateUpload } = useImageUpload();

  // const [image, setImage] = useState(null);
  const addImage = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      mutateUpload({ image: reader.result }, {
        onSuccess: (data) => {
          setImage(data.data.body.image.url);
        }, onError: () => {
          setImage(null);
        }
      })
    }
    reader.readAsDataURL(file)
  }

  const removeImage = () => {
    setImage(null);
  }
  const onDragOver = (e) => {
    e.preventDefault();
  }
  const onDrop = (e) => {
    e.preventDefault();
    addImage(e.dataTransfer.files[0]);
  }

  // moving the switch case to another component will lead to re-renders
  // you are adviced to expect things to not work if that is done
  // edit: re-render was probably caused due to duplicate keys and may have been solved
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
    case "image":
      return(
        <figure className="editable_wrapper_with_image">
          <div onDragOver={onDragOver} onDrop={onDrop} className="editable_file_input_container">
            {image && <img src={image} alt="section"/> }
            {!image && <div className="editable_file_input_image_placeholder"><ImageIcon/> Drop an image +</div> }
          <div className="editable_absolute">
            <label className="editable_file_input_label">
              <CallToActionButton> <ImageIcon/> Browse Files + </CallToActionButton>
              <input onChange={(e) => addImage(e.target.files[0])} id="editable_input_file" type="file" hidden accept=".jpg, .jpeg, .png"/>
            </label>
            {isUploading && <ModalFloating element={ { title: "Uploading Image", description:"Go on. Keep Writing" }}/>}
            {image && <CallToActionButton onClick={removeImage}> <TrashIcon/> </CallToActionButton> }
          </div>
          </div>
          <figcaption className="editable_wrapper">
              {showPlaceholder && <div className="editable_placeholder">{placeholder}</div> }
              <div className={`editable_main ${className}`} contentEditable="true" ref={input_ref} name={name} onInput={onInput} />
          </figcaption>
        </figure>
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

