import { combineReducers } from 'redux';
import studyReducer from './studyReducer';
import jobsReducer from './jobsReducer';

const rootReducer = combineReducers({
  study: studyReducer,
  jobs: jobsReducer
});

export default rootReducer;
