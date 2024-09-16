import { combineReducers } from 'redux';
import curriculumReducer from './curriculumReducer';

const rootReducer = combineReducers({
  cvs: curriculumReducer,
});

export default rootReducer;
