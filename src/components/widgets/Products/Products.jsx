import React from 'react';
import PropTypes from 'prop-types';
import Product from '../Product/Product';
import ProductsStyled from './ProductsStyled';

const displayName = 'Products';

const propTypes = {
  fetchedProducts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      picture: PropTypes.string,
    }),
  ).isRequired,
  selectProductsHandler: PropTypes.func.isRequired,
};

function Products({ fetchedProducts, selectProductsHandler }) {
  return (
    <ProductsStyled>
      {fetchedProducts.map(fetchedProduct => (
        <Product key={fetchedProduct.name} {...fetchedProduct} selectProductsHandler={selectProductsHandler} />
      ))}
    </ProductsStyled>
  );
}

Products.displayName = displayName;
Products.propTypes = propTypes;

export default Products;
