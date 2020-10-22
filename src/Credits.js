import React from "react";

function Credits({ creditlink, photolink, credit }) {
  return (
    <p>
      <span>
        Photo by <a href={creditlink}>{credit}</a> on{" "}
        <a href={photolink}>Unsplash</a>
      </span>
    </p>
  );
}

export default Credits;
