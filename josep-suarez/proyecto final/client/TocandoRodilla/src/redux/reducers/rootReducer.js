import {combineReducers} from 'redux';
import motosReducer from './motosReducer';

const rootReducer = combineReducers({
  motos: motosReducer,
});

export default rootReducer;
