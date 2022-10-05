import React from "react";
import Infocard from "../infocard";
import "./style.css"

const ImageCard = ({image}) => {
  return (
    <div className="image_card">
      <div className="image_card_container">{image}</div>
      <div className="image_card_description"><Infocard/></div>
    </div>
  )
}

export default ImageCard;
