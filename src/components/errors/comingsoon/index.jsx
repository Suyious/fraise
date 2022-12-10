import React from "react";
import {Link} from "react-router-dom";
import Navigation from "../../navigation";
import "./style.css"

const ComingSoon = ({message = ""}) => {
  return (
    <div className="coming-soon">
      <Navigation preference="primary"/>
      <div className="error-text">Coming Soon</div>
      <div className="error-message">{message}</div>
      <Link to="/">
        <div className="back-link primary">Home</div>
      </Link>
    </div>
  )
}

export default ComingSoon;
