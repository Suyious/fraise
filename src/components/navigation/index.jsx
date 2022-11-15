import React from "react";
import "./styles.css"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navigation({children}) {

  const location = useLocation();

  const variant = (path) => {
    // true: primary, false: secondary
    if(path.search(/\/$/) === 0) return true;
    if(path.search(/\/blogs\/?$/) === 0) return false;
    if(path.search(/\/blogs\/?.*$/) === 0) return true;
    if(path.search(/\/404\/?$/) === 0) return true;
    return false;
  }

  return (
    <div className={`nav ${variant(location.pathname) ? "primary" : "secondary"}`}>
      <div className="nav_wrapper boxwidth">
        <div className="nav_logo">
          <Link to="/">
            <h1>fraise.</h1>
          </Link>
        </div>
        <ul className="nav_links">
          {children}
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
