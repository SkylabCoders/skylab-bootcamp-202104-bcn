import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducers';
import countriesReducer from './countriesReducers';

const rootReducer = combineReducers({
  dashboardReducer,
  countries: countriesReducer
});

export default rootReducer;
