import React, { useState } from "react";
import "../assets/css/SearchBar.css";

function SearchBar({ callBackFromParent, error }) {
  const [value, setValue] = useState("");
  const [warning, setWarning] = useState(false);

  function handleChange(event) {
    setValue(event.target.value);
  }

  function sendValueToParent(event) {
    event.preventDefault();
    // Check if the input field has been submitted empty or if it contains numbers
    if (value.trim() === "" || value.match(/\d+/g) !== null) {
      setWarning(true);
    } else {
      callBackFromParent(value);
      setWarning(false);
    }
  }

  return (
    <div className="SearchBar">
      {error && <p>Error: {error}</p>}
      {warning && <p>Warning: Please check that you've entered a valid city</p>}
      <form className="SearchBar-form" onSubmit={sendValueToParent}>
        <input
          className="SearchBar-input"
          placeholder="Procure o clima na cidade..."
          onChange={handleChange}
          value={value}
          type="text"
          autoFocus
        />
        <button className="SearchBar-button" type="submit">
          <svg className="SearchBar-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </form>
    </div>
  );
}
export default SearchBar;
