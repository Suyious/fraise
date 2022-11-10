import React, {useState} from "react"
import {ReactComponent as PlusIcon} from "../../../assets/icons/plus.svg"
import {ReactComponent as EditIcon} from "../../../assets/icons/edit.svg"
import {ReactComponent as TrashIcon} from "../../../assets/icons/delete.svg"
import "./styles.css"

const BlogCreate = () => {

  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [banner, setBanner] = useState(null);

  const addTag = () => {
    if(tagInput !== ""){
      setTags((prev) => [...prev, tagInput]);
      setTagInput("");
    }
  };

  const removeTag = (key) => {
    setTags((prev) => prev.filter((_, i) => i !== key));
  }

  const addBanner = (e) => {
    setBanner(URL.createObjectURL(e.target.files[0]));
  }

  return(
    <div className="blog blog_create_variant">

      <div className="blog_banner blog_create_variant">
        {banner && 
          <div className="blog_banner_image_container blog_create_variant">
            <img className="blog_banner_image" src={banner} alt="banner for the blog" />
          </div>}

        <div className="blog_banner_wrapper blog_width">
          <div className="blog_banner_data_card">
            <div className="blog_banner_tags blog_create_variant">
              { tags.map((tag, i) => (
                  <div className="blog_banner_tag blog_create_variant" key={i}>
                    {tag}
                    <div onClick={() => removeTag(i)} className="blog_banner_create_tag_delete"><TrashIcon/></div>
                  </div>
              ))}
                <div className="blog_create_tags_input">
                  <input value={tagInput} onChange={(e) => setTagInput(e.target.value)} placeholder="Add Tags"/>
                  <div onClick={addTag} className="blog_create_tags_svg"><PlusIcon/></div>
                </div>
            </div>
            <div className="blog_banner_title">
              <input type="text" placeholder="Add your Blog Title"/>
            </div>
            <div className="blog_banner_subtitle">
              <input type="text" placeholder="Add your Blog Description"/>
            </div>
            <div className="blog_banner_author"></div>
          </div>
          <div className="blog_create_banner_edit_container">
            <label className="blog_create_banner_edit_label" htmlFor="input-background">Edit Background
            <div className="blog_create_edit_svg"><EditIcon/></div></label>
            <input onChange={addBanner} className="blog_create_background_input_file" id="input-background" type="file" accept=".jpg, .jpeg, .png"/>
          </div>
        </div>

      </div>

      <div className="blog_body blog_create_variant">

      </div>

    </div>
  )
}
export default BlogCreate
