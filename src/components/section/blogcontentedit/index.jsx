import "./styles.css"
import {ReactComponent as HeadingIcon} from "../../../assets/icons/heading.svg"
import {ReactComponent as PictureIcon} from "../../../assets/icons/image.svg"
import {ReactComponent as QuoteIcon} from "../../../assets/icons/quote.svg"
import {ReactComponent as CodeIcon} from "../../../assets/icons/code.svg"
import {useEffect, useRef, useState} from "react"
import Editable from "../../inputs/editableElements"

const BlogContentEdit = ({ value="", type="text", id, setContent, addContent, removeContent }) => {

  const content = useRef(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    if(typeof value === "string"){
      if(value) content.current.innerText = value;
      setContent({
        id: id,
        type: type,
        value: setContentValue(value) 
      });
    } else {
      if(value.caption) content.current.innerText = value.caption;
      setContent({
        id: id,
        type: type,
        value: setContentValue(value.caption)
      });
    }
  }, [type, id, image])

  const setContentValue = (val) => {
    if(type === "image"){
      return {
        caption: val.trim(),
        url: image
      }
    }
    return val;
  }

  const contentUpdate = (e) => {
    setContent({
      id: id,
      type: type,
      value: setContentValue(e.target.innerText) 
    });
  }

  const setType = (newtype) => {
    setContent({
      id: id,
      type: newtype,
      value: value,
    })
  }

  return(
    <div className="blog_content_main blog_content_edit">
      <Editable role={type} input_ref={content} className="articlesection_input" placeholder="Start writing your content" onChange={contentUpdate} image={image} setImage={setImage}/>
      <div className="blog_content_edit_bottom_wrapper">
        <div className="blog_content_edit_bottom">
          <button onClick={addContent}>Add a section +</button>
          <button title="Paragraph" className="blog_content_set_button" disabled={type==="para"} onClick={() => setType("para")}> A </button>
          <button title="Image" className="blog_content_set_button" disabled={type==="image"} onClick={() => setType("image")}>
            <PictureIcon/>
          </button>
          <button title="Heading" className="blog_content_set_button" disabled={type==="head"} onClick={() => setType("head")}>
            <HeadingIcon/>
          </button>
          <button title="Quote" className="blog_content_set_button" disabled={type==="quote"} onClick={() => setType("quote")}>
            <QuoteIcon/>
          </button>
          <button title="Code" className="blog_content_set_button" disabled={type==="code"} onClick={() => setType("code")}>
            <CodeIcon/>
          </button>
          <button onClick={removeContent}>Remove section</button>
        </div>
      </div>
    </div>
  )
}
export default BlogContentEdit
