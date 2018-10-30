import React from "react";
import PropTypes from "prop-types";
import logo from "../../../logo.svg";

const divStyle = {
  width: "30%",
  padding: "0.5%"
};

Header.displayName = "Header";

Header.propTypes = {
  name: PropTypes.string
};

Header.defaultProps = {
  name: ""
};

Header.divStyle = divStyle;

function Header() {
  return (
    <header className="App-header">
      {/*<img src={logo} className="App-logo" alt="logo" />*/}
    </header>
  );
}

export default Header;
