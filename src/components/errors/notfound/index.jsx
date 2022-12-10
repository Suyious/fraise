import React from "react";
import {Link} from "react-router-dom";
import Navigation from "../../navigation";
import "./style.css"

const NotFound = () => {
  return (
    <div className="not-found">
      <Navigation preference="primary"/>
      <div className="error-text">Not Found</div>
      <Link to="/">
        <div className="back-link primary">Home</div>
      </Link>
    </div>
  )
}

export default NotFound;
