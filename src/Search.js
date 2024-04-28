import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="header-search-container">
      <form>
        <div className="search-form" id="search-form">
          <input
            type="search"
            class="form-control"
            id="search-form-input"
            placeholder="Enter a city.."
          />

          <button type="submit" value="Search" class="search-form-button">
            submit
          </button>
        </div>
      </form>
    </div>
  );
}
