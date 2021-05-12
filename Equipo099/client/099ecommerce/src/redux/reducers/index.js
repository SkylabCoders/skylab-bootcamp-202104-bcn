import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import selectedItemReducer from './selectedItemReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  selectedItem: selectedItemReducer,
});

export default rootReducer;