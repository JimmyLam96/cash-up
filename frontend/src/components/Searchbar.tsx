import React from "react";
import * as FaIcons from "react-icons/fa";
import "../css/Searchbar.css";

function Searchbar() {
  return (
    <form className="searchbar">
      <i className="icon">
        <FaIcons.FaSearch />
      </i>
      <input placeholder="search" className="inputfield"></input>
    </form>
  );
}

export default Searchbar;
