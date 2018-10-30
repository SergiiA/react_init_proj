import React from "react";
import PropTypes from "prop-types";

const divStyle = {
  padding: "0.5%"
};

Footer.displayName = "Footer";

Footer.propTypes = {
  name: PropTypes.string
};

Footer.defaultProps = {
  name: ""
};

function Footer() {
  return (
    <footer className="App-footer">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </footer>
  );
}

export default Footer;
