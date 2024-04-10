import React from "react";
import "./Search.css";

const Search = ({ searchInput, searchInputByYear, search }) => {
  return (
    <div className="search-box">
      <input
        type="text"
        className="search-bar"
        placeholder="Search by title..."
        onChange={searchInput}
        onKeyPress={search}
      />
      <input
        type="text"
        className="search-bar"
        placeholder="Search by year..."
        onChange={searchInputByYear}
        onKeyPress={search}
      />
    </div>
  );
};

export default Search;
