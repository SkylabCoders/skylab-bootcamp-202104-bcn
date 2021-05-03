import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import countriesReducer from './countriesReducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  countries: countriesReducer
});

export default rootReducer;
