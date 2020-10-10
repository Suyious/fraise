import React from "react";

function BigSearch() {
  return (
    <div className="BigSearch boxwidth">
      <div className="BigSearch__searchbox">
        <input
          className="BigSearch__input"
          type="text"
          placeholder="What's on your mind?"
        />
      </div>
    </div>
  );
}

export default BigSearch;
