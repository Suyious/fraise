import React from "react";
import "./styles.css"

const Infocard = () => {
  return (
    <div className="infocard_main">
      <ul className="infocard_tags">
        <li>Travel</li>
        <li>World</li>
      </ul>
      <h2 className="infocard_title">Is Switzerland the only place worth travelling right now?</h2>
      <p className="infocard_description">Even though we are Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt....</p>
      <span className="infocard_timestamp">5h ago</span>
      <div className="infocard_bottom">
        <div className="infocard_bottom_left">
          <div className="infocard_bottom_image"></div>
          <span>Paul Gustavo</span>
        </div>
        <div className="infocard_bottom_right">Read Blog</div>
      </div>
    </div>
  )
}

export default Infocard
