import React from "react";
import * as FaIcons from "react-icons/fa";
import "../css/Searchbar.css";

function Searchbar(props: SearchProps) {
  return (
    <form className="searchbar">
      <i className="icon">
        <FaIcons.FaSearch />
      </i>
      <input
        placeholder="search"
        className="inputfield"
        value={props.value}
        onChange={(e) => {
          props.onChange(e.target.value);
        }}
      ></input>
    </form>
  );
}

export default Searchbar;

interface SearchProps {
  value: string;
  onChange: (input: string) => void;
}
