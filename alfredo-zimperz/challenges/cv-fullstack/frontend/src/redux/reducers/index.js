import { combineReducers } from 'redux';
import cv from './cvReducer';
import hasSentContact from './contactReducer';

const rootReducer = combineReducers({
  cv,
  hasSentContact,
});

export default rootReducer;
