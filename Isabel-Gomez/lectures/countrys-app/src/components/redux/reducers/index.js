import { combineReducers } from 'redux';
import dashboardReducer from './dashboardReducer';
import countriesReducers from './countriesReducers';

const rootReducer = combineReducers({
  dashboardReducer,
  countriesReducers,
});

export default rootReducer;
