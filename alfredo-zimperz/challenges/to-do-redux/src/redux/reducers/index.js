import { combineReducers } from 'redux';
import questionsReducer from './questionsReducer';
import booksReducer from './booksReducer';

const rootReducer = combineReducers({
  books: booksReducer,
  questions: questionsReducer,
});

export default rootReducer;
