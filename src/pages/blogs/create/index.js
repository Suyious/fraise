import React, {useState} from "react"
import "./styles.css"

const BlogCreate = () => {

  const [tags, setTags] = useState([]);

  return(
    <div className="blog blog_create_variant">
      <div className="blog_banner blog_create_variant">
        <div className="blog_banner_image_container blog_create_variant"></div>
        <div className="blog_banner_wrapper blog_width">
          <div className="blog_banner_data_card">
            <div className="blog_banner_tags blog_create_variant">
              {tags.length > 0 ?
                tags.map((tag, i) => (
                  <div key={i}>{tag}</div>
              )) :
                <div className="blog_create_tags_input">
                  <input placeholder="Add Tags"/><div>+</div>
                </div>
              }
            </div>
            <div className="blog_banner_title">
              <input type="text" placeholder="Add your Blog Title"/>
            </div>
            <div className="blog_banner_subtitle">
              <input type="text" placeholder="Add your Blog Subtitle"/>
            </div>
            <div className="blog_banner_author"></div>
          </div>
          <div className="blog_create_banner_edit_container">
            <label>Edit Background</label>
            <input type="file"/>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BlogCreate
