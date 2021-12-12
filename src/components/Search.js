import React from "react";
import { MdSearch } from "react-icons/md";

function Search({ handleSearchNote }) {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        onChange={(event) => handleSearchNote(event.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
}

export default Search;
