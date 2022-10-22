import React from "react";
import {Link} from "react-router-dom";
import Infocard from "../infocard";
import "./style.css"

const ImageCard = ({image}) => {
  return (
    <div className="image_card">
      <Link to="/blogs/123">
        <div className="image_card_container"><img alt="blog main background" className="image_card_image" src={image} /></div>
      </Link>
      <Link to="/blogs/123">
        <div className="image_card_title">
          <h2>Is Switzerland the only place worth travelling right now?</h2>
          <span className="infocard_timestamp">5h ago</span>
        </div>
      </Link>
      <div className="image_card_description"><Infocard/></div>
    </div>
  )
}

export default ImageCard;
