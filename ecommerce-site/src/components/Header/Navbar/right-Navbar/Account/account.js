import React from "react";
import "./../../nav-styles.scss"; // import stylesheet into the project

const Account = (props) => {
  return (
    <div>
      <button
        className="btn btn-secondary account nav-link dropdown-toggle"
        type="button"
        data-toggle="dropdown"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="fa fa-user"></i>
      </button>
      <ul className="dropdown-menu">
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/registration">Register</a>
        </li>
      </ul>
    </div>
  );
}; // function components

export default Account;
