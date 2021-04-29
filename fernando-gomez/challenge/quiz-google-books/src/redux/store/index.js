import { createStore } from 'redux';
import rootReducer from '../reducers/generalReducers';

const store = createStore(rootReducer);

export default store;
