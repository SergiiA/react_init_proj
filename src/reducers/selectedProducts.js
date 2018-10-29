import { handleActions } from "redux-actions";
import { List } from "immutable";
import { selectProduct } from "../actions";

let id = 1;

const initStoreState = List([]);

const selectedProducts = handleActions(
  {
    [selectProduct]: (state, action) => {
      id = id + 1;
      const product = action.payload;
      product.quantity = 1;

      return state.push({ id, ...product });
    },
  },
  initStoreState
);

export default selectedProducts;
