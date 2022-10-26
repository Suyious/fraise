import React from "react";
import {Link} from "react-router-dom";
import Infocard from "../infocard";
import "./style.css"

const ImageCard = ({blog}) => {
  return (
    <div className="image_card">
      <Link to="/blogs/123">
        <div className="image_card_container"><img alt="blog main background" className="image_card_image" src={blog.image} /></div>
      </Link>
      <Link to="/blogs/123">
        <div className="image_card_title">
          <h2>{blog.title}</h2>
          <span className="infocard_timestamp">5h ago</span>
        </div>
      </Link>
      <div className="image_card_description"><Infocard blog={blog}/></div>
    </div>
  )
}

export default ImageCard;
