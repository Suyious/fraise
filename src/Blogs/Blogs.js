import React from "react";
import "./Blogs.css";
import Blogscolumns from "./Blogscolumns";
import BlogsArray from "./BlogArrays";

const Blogs = () => {
  return (
    <div className="Blogs main">
      <div className="Blogs_hero boxwidth">
        <div className="Blogs_topbar">
          <h1 className="Blogs_topbar_title">Blogs</h1>
          <ul className="Blogs_topbar_sections">
            <li className="Blogs_topbar_section">Entertainment</li>
            <li className="Blogs_topbar_section">Sports</li>
            <li className="Blogs_topbar_section">LifeStyle</li>
            <li className="Blogs_topbar_section">Fashion</li>
            <li className="Blogs_topbar_section">Hollywood</li>
          </ul>
        </div>
        <div className="Blogs_columns">
          <Blogscolumns BlogArray={BlogsArray[0]} />
          <Blogscolumns BlogArray={BlogsArray[1]} />
          <Blogscolumns BlogArray={BlogsArray[2]} />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
