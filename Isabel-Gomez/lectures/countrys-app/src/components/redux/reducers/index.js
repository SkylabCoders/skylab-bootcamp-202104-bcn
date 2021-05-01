import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import countriesReducers from './countriesReducers';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  countries: countriesReducers,
});

export default rootReducer;
