import React from "react";
import "./styles.css"

function Search({type="text", placeholder="Type Something.."}) {
  return (
    <div className="search">
      <div className="search_searchbox">
        <input
          className="search_input"
          type={type}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
}

export default Search;
