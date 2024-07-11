import { combineReducers } from 'redux';
import curriculumReducer from './curriculumReducer';

const rootReducer = combineReducers({
  curriculum: curriculumReducer,
});

export default rootReducer;
