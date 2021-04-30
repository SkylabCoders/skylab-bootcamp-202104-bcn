import { combineReducers } from 'redux';
import listReducer from './listReducer';
// import selectedHeroReducer from './selectedheroReducer';

const rootReducer = combineReducers({
  list: listReducer,

});

export default rootReducer;
