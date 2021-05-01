import { combineReducers } from 'redux';
import dashboard from './dashboardReducer';
import countries from './countriesReducer';

const rootReducer = combineReducers({
  dashboard,
  countries,
});

export default rootReducer;
