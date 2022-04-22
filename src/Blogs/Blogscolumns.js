import React from "react";
import { Link } from "react-router-dom";

function Blogscolumns({BlogArray}) {
  return (
    <div className="Blogs_column">
      {BlogArray.map((Blog, i) => {
        return (
          <div key={i} className="Blog_Card">
            <img
              src={Blog}
              alt=""
            />
            <div className="Blog_Card_description">
                <h2>This is the blog Title</h2>
                <p>This is description to the blog</p>
                
            </div>
            <div className="Blog_Card_Link">
              <Link to="/fraise/blogs/1">Read Blog</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Blogscolumns;
