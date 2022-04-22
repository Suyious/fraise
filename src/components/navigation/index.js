import React from "react";
import "./styles.css"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navigation({children}) {

  const location = useLocation();

  return (
    <div className={`nav ${location.pathname.includes("/fraise/blogs") ? "nav_blog" : ""}`}>
      <div className="nav_wrapper boxwidth">
        <div className="nav_logo">
          <Link to="/fraise">
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
