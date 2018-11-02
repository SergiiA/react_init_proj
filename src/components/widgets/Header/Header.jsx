import React from "react";
import PropTypes from "prop-types";
import logo from "../../../logo.svg";

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
    </header>
  );
}

export default Header;
