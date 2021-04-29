import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import singleHeroReducer from './single-heroReducer';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  hero: singleHeroReducer
});

export default rootReducer;
