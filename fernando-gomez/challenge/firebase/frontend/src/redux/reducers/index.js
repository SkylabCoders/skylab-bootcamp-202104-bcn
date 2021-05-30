import { combineReducers } from 'redux';
import user from './authReducer';
import curriculum from './curriculumReducer';

export default combineReducers({
  user,
  curriculum,
});
