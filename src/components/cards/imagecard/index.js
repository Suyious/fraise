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
      <div className="image_card_description"><Infocard/></div>
    </div>
  )
}

export default ImageCard;
