import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducers';
import countriesReducer from './countriesReducers';

const rootReducer = combineReducers({
  dashboardReducer,
  countriesReducer
});

export default rootReducer;
