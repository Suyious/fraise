import React from "react";
import "./styles.css"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Navigation({children}) {

  const location = useLocation();
  const primarypaths = [/\/$/, /\/blogs\/?.+$/, /\/404\/?$/];
  const secondarypaths = [/\/blogs\/?$/];

  const variant = (path) => {
    // NOTE: true: primary, false: secondary
    if(path.search(/\/$/) === 0) return true;
    if(primarypaths.some((pathregex) => path.search(pathregex) === 0)) return true;
    if(secondarypaths.some((pathregex) => path.search(pathregex) === 0)) return false;
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
