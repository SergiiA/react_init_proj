import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../controls';

const displayName = 'Product';

const propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  removeHandler: PropTypes.func.isRequired,
};

function Product({ name, price, removeHandler }) {
  return (
    <div style={{width:"80px", backgroundColor:"grey", padding:"10px", flexWrap:"wrap"}}>
      {name}
      {' - '}
      <p>Price {price}"$"</p>
      <Button text="Remove" onClick={removeHandler} value="removeProduct" />
    </div>
  );
}

Product.displayName = displayName;
Product.propTypes = propTypes;

export default Product;
