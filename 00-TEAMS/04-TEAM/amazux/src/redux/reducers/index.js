import { combineReducers } from 'redux';
import products from './productsReducer';
import error from './errorReducer';
import auth from './authReducer';
import cart from './cartReducer';

const rootReducer = combineReducers({
  auth,
  error,
  products,
  cart
});

export default rootReducer;
