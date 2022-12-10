import React from "react";
import "./styles.css"
import {ReactComponent as Glass} from "../../assets/icons/search.svg";

function Search({input_ref, type="text", placeholder="Type Something..", onSubmit}) {
  return (
    <div className="search">
      <form onSubmit={onSubmit} className="search_searchbox">
        <input
          ref={input_ref}
          className="search_input"
          type={type}
          placeholder={placeholder}
        />
        <button className="search_icon">
          <Glass/>
        </button>
      </form>
    </div>
  );
}

export default Search;
