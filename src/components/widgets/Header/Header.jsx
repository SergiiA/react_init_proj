import React from "react";
import PropTypes from "prop-types";
import logo from "../../../logo.svg";

const divStyle = {
  padding: "0.5%"
};

Header.displayName = "Header";

Header.propTypes = {
  name: PropTypes.string
};

Header.defaultProps = {
  name: ""
};

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
}

export default Header;
