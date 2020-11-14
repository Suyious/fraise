import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__content boxwidth">
        <div className="nav__logo">
          <Link to="/fraise">
            <h1>fraise.</h1>
          </Link>
        </div>
        <ul className="nav__links">
          <li className="nav__link"><Link to="/fraise/blogs">blogs</Link></li>
          <li className="nav__link"><Link to="/blogs">login</Link></li>
          <li className="nav__link"><Link to="/blogs">signup</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
