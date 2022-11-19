import "./styles.css"
import {ReactComponent as HeadingIcon} from "../../../assets/icons/heading.svg"
import {ReactComponent as PictureIcon} from "../../../assets/icons/image.svg"
import {ReactComponent as QuoteIcon} from "../../../assets/icons/quote.svg"
import {ReactComponent as CodeIcon} from "../../../assets/icons/code.svg"
import {useEffect, useRef} from "react"
import Editable from "../../inputs/editableElements"

const BlogContentEdit = ({ value="", type="text", setContent, addContent }) => {

  const content = useRef(null);

  useEffect(() => {
    if(value) content.current.innerText = value;
  }, [type])

  const contentUpdate = (e) => {
    setContent({
      type: type,
      value: e.target.innerText 
    });
  }

  const setType = (newtype) => {
    setContent({
      type: newtype,
      value: value,
    })
  }

  return(
    <div className="blog_content_main blog_content_edit">
      <Editable role={type} input_ref={content} className="articlesection_input" placeholder="Start writing your content" onChange={contentUpdate}/>
      <div className="blog_content_edit_bottom_wrapper">
        <div className="blog_content_edit_bottom">
          <button onClick={addContent}>Add a section +</button>
          <button className="blog_content_set_button" disabled={type==="para"} onClick={() => setType("para")}> A </button>
          <button className="blog_content_set_button" disabled={type==="image"} onClick={() => setType("image")}>
            <PictureIcon/>
          </button>
          <button className="blog_content_set_button" disabled={type==="head"} onClick={() => setType("head")}>
            <HeadingIcon/>
          </button>
          <button className="blog_content_set_button" disabled={type==="quote"} onClick={() => setType("quote")}>
            <QuoteIcon/>
          </button>
          <button className="blog_content_set_button" disabled={type==="code"} onClick={() => setType("code")}>
            <CodeIcon/>
          </button>
        </div>
      </div>
    </div>
  )
}
export default BlogContentEdit
