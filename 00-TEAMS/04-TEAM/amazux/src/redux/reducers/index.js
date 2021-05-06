import { combineReducers } from 'redux';
import products from './productsReducer';
import error from './errorReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  auth,
  error,
  products
});

export default rootReducer;
