import React from "react";
import PropTypes from "prop-types";
import ButtonIncDec from "./ButtonIncDec";
import {InputCount} from "../../controls/Input/InputContainer";

const displayName = "Counter";

const propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  }).isRequired,
  increaseHandler: PropTypes.func.isRequired
};

function Counter({ product, increaseHandler }) {
  return (
    <div>
      <ButtonIncDec text="+" value="+" onClick={increaseHandler} />
      <InputCount />
      <ButtonIncDec text="-" value="-" />
    </div>
  );
}

Counter.displayName = displayName;
Counter.propTypes = propTypes;

export default Counter;
