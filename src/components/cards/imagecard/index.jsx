import {Link} from "react-router-dom";
import Infocard from "../infocard";
import { timeAgo } from "../../../utils/dateFormat";
import "./style.css"

const ImageCard = ({blog}) => {
  return (
    <div className="image_card">
      <Link to={ `/blogs/${blog._id}` }>
        <div className={ `image_card_container ${blog.image && "overlay"}` }>
          { blog.image && <img alt="blog main background" className="image_card_image" src={blog.image} /> }
        </div>
      </Link>
      <Link to="/blogs/123">
        <div className="image_card_title">
          <h2>{blog.title}</h2>
          <span className="infocard_timestamp">{timeAgo(blog.createdAt)}</span>
        </div>
      </Link>
      <div className="image_card_description"><Infocard blog={blog}/></div>
    </div>
  )
}

export default ImageCard;
