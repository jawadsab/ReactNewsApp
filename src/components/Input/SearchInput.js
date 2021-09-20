import { useState } from "react";

import "./SearchStyles.css";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };
  const keyPressHandlerr = (e) => {
    if (e.code === "Enter") {
      console.log("Make a call to API");
      setQuery("");
    }
  };
  const clickHandler = (e) => {
    console.log("Make a call to API");
    setQuery("");
  };
  return (
    <div className="navigation__search">
      <button onClick={clickHandler} className="search__button">
        <i className="fas fa-search"></i>
      </button>
      <input
        onKeyPress={keyPressHandlerr}
        value={query}
        onChange={changeHandler}
        className="search__input"
        type="text"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchInput;
