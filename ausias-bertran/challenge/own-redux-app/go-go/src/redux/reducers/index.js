import { combineReducers } from 'redux';
import loadListReducer from './loadListReducer';

const rootReducer = combineReducers({
  countries: loadListReducer,
});

export default rootReducer;
