import React from "react";
import "./SearchForm.css";

function SearchForm() {
  return (
    <form className="search_form">
      <label class="search_label">
        <input
          className="search_input"
          type="text"
          placeholder="Search Our Website..."
          name="search"
        />
        <button
          className="search_submit transition_delay hover-color btn"
          type="button"
          value="Search"
        >
          Search
        </button>
      </label>
    </form>
  );
}

export default SearchForm;
