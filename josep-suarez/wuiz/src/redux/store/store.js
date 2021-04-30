import { createStore } from 'redux';
import rootReducer from '../reducers/generalReducer';

const store = createStore(
  rootReducer
);

export default store;
