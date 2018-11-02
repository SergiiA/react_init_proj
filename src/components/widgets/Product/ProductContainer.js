import {
    compose, setDisplayName, withHandlers, setPropTypes, pure,
  } from 'recompose';
  import PropTypes from 'prop-types';
  import Product from './Product';
  
  export const enhance = compose(
    setDisplayName('ProductContainer'),
    setPropTypes({
      id: PropTypes.number.isRequired,
      onRemove: PropTypes.func.isRequired,
    }),
    withHandlers({
      handleRemove: ({ id, onRemove }) => () => onRemove(id),
    }),
    pure,
  );
  
  export default enhance(Product);
  