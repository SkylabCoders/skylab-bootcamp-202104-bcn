import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import countriesReducer from './countriesReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  countries: countriesReducer,
  auth: authReducer
});

export default rootReducer;
