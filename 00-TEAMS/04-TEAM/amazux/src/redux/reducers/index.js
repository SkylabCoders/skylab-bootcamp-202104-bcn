import { combineReducers } from 'redux';
import user from './userReducer';
import products from './productsReducer';
import error from './errorReducer';
import auth from './authReducer';

const rootReducer = combineReducers({
  user,
  auth,
  error,
  products
});

export default rootReducer;
