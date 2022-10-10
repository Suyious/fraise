import React from "react";

const Blog = (props) => {
  return (
    <div className="blog">
      One Blog {props.match.params.blog}
    </div>
  )
}

export default Blog;
