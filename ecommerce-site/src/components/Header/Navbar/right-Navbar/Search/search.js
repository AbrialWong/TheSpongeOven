import React from "react";
import "./../../nav-styles.scss"; // import stylesheet into the project

const Search = (props) => {
  return (
    <div>
      <form className="form-inline" action="/action_page.php">
        <input
          className="form-control mr-sm-2 nav-link"
          type="text"
          placeholder="Search"
        />
        <button className="btn btn-secondary account nav-link" type="button">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}; // function components

export default Search;
