import { combineReducers } from 'redux';
import globalDataReducers from './GlobalDataReducer';

const rootReducers = combineReducers({
  globalData: globalDataReducers
});

export default rootReducers;
