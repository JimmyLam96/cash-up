import React from 'react';
import * as FaIcons from 'react-icons/fa';
import '../css/Searchbar.css';

function Searchbar({ searchTerm, handleSearch }: SProps) {
  return (
    <form className="searchbar">
      <i className="icon">
        <FaIcons.FaSearch />
      </i>
      <input
        placeholder="search"
        className="inputfield"
        value={searchTerm}
        onChange={(e) => handleSearch(e.target.value)}
      ></input>
    </form>
  );
}

export default Searchbar;

interface SProps {
  searchTerm: string;
  handleSearch: (input: string) => void;
}
