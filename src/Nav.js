import React from "react";

function Nav() {
  return (
    <div className="nav">
      <div className="nav__content boxwidth">
        <div className="nav__logo">
          <h1>fraise.</h1>
        </div>
        <ul className="nav__links">
          <li className="nav__link">blogs</li>
          <li className="nav__link">login</li>
          <li className="nav__link">signup</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
