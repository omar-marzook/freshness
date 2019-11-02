import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search_form" role="search">
      <input
        className="search_input"
        type="text"
        placeholder="Search Our Website..."
        title="Search Our Website"
        name="search"
        aria-label="Search"
      />
      <button
        className="search_submit transition_delay hover-color btn"
        type="submit"
        value="Search"
      >
        Search
      </button>
    </form>
  );
}

export default SearchForm;
