import { combineReducers } from 'redux';
import studyReducer from './studyReducer';
import jobsReducer from './jobsReducer';
import languageReducer from './languageReducer';

const rootReducer = combineReducers({
  study: studyReducer,
  jobs: jobsReducer,
  language: languageReducer
});

export default rootReducer;
