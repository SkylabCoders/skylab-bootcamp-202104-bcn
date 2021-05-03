import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import singleHeroReducer from './singleHeroReducer';

const rootReducers = combineReducers({
  heroes: heroesReducer,
  hero: singleHeroReducer
});

export default rootReducers;
