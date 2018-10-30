import React from "react";
import PropTypes from "prop-types";

const divStyle = {
  padding: "0.5%",
  color: "red",
  display: "inline-block"
};

Footer.displayName = "Footer";

Footer.propTypes = {
  name: PropTypes.string
};

Footer.defaultProps = {
  name: ""
};

Footer.divStyle = divStyle;

function Footer() {
  return (
    <footer className="App-footer" style={divStyle}>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <p>Footer</p>
    </footer>
  );
}

export default Footer;
