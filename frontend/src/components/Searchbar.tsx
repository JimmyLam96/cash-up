import React from "react";
import * as FaIcons from "react-icons/fa";
import "../css/Searchbar.css";
import { useOrder } from "../utils/useOrder";

function Searchbar() {

  const { searchTerm, setSearchInput} = useOrder();

  return (
    <form className="searchbar">
      <i className="icon">
        <FaIcons.FaSearch />
      </i>
      <input
        placeholder="search"
        className="inputfield"
        value={searchTerm}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      ></input>
    </form>
  );
}

export default Searchbar;

// interface SearchProps {
//   onChange: (input: string) => void;
// }
