import React, { useState } from "react";

const Search = (props) => {
  
  const [search_value, set_search_value] = useState("");

  const handleSearchInputChanges = (e) => {
    set_search_value(e.target.value);
  }

  const resetInputField = () => {
    set_search_value("")
  }

  const callSearchFunction = (e) => {
    e.preventDefault();
    props.search(search_value);
    resetInputField();
  }

  return (
    <form className="search">
      <input
        value={search_value}
        onChange={handleSearchInputChanges}
        type="text"
      />
      <input onClick={callSearchFunction} type="submit" value="SEARCH"/>
    </form>
  );  
}

export default Search;