import { combineReducers } from 'redux';
import informationReducer from './studyReducer';
import jobsReducer from './jobsReducer';

const rootReducer = combineReducers({
  study: informationReducer,
  jobs: jobsReducer
});

export default rootReducer;
