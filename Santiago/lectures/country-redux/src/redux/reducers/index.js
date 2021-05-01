import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import countriesReducer from './countriesReducer';

const rootReducer = combineReducers({
  dashboardReducer,
  countriesReducer
});

export default rootReducer;
