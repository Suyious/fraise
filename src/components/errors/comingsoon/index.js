import React from "react";
import {Link} from "react-router-dom";
import "./style.css"

const ComingSoon = () => {
  return (
    <div className="coming-soon">
      <div className="error-text">Coming Soon</div>
      <Link to="/">
        <div className="back-link primary">Home</div>
      </Link>
    </div>
  )
}

export default ComingSoon;
