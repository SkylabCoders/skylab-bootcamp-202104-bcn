import { combineReducers } from 'redux';
import products from './productReducer';
import cartList from './cartReducer';

const rootReducer = combineReducers({
  products,
  cartList
});

export default rootReducer;
