import React from "react";
import "./styles.css"
import {ReactComponent as Glass} from "../../icons/search.svg";

function Search({type="text", placeholder="Type Something.."}) {
  return (
    <div className="search">
      <div className="search_searchbox">
        <input
          className="search_input"
          type={type}
          placeholder={placeholder}
        />
        <div className="search_icon">
          <Glass/>
        </div>
      </div>
    </div>
  );
}

export default Search;
