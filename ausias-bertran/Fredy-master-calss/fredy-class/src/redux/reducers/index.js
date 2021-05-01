import { combineReducers } from 'redux';
import dashboardReducer from './dashbordReducer';
import countriesReducer from './countriesReducer';

const rootReducer = combineReducers({
  dashboard: dashboardReducer,
  countries: countriesReducer,
});

export default rootReducer;
