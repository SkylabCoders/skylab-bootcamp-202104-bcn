import { combineReducers } from 'redux';
import user from './userReducer';
import products from './productsReducer';
import error from './errorReducer';

const rootReducer = combineReducers({
  user,
  error,
  products
});

export default rootReducer;
