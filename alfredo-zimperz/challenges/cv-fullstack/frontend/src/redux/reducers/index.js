import { combineReducers } from 'redux';
import cv from './cvReducer';

const rootReducer = combineReducers({
  cv,
});

export default rootReducer;
