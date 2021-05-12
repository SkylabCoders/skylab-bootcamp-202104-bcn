import { combineReducers } from 'redux';
import products from './productsReducer';
import cart from './cartProductsReducer';

const rootReducer = combineReducers({
  products,
  cart
});

export default rootReducer;
