import React from "react";
import PropTypes from "prop-types";
import InputStyled from "./InputStyled";

const displayName = "Input";

const propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func.isRequired
};

const defaultProps = {
  value: "",
  placeholder: "Type your text here"
};

function Input({ value, placeholder, onChangeHandler }) {
  return (
    <InputStyled
      type="text"
      name="counter"
      value={value}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}

Input.displayName = displayName;
Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default Input;
