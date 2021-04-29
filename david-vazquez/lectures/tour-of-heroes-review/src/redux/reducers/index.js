import { combineReducers } from 'redux';
import heroesReducers from './heroesReducers';
import singleHeroReducer from './singleHeroReducer';

const rootReducers = combineReducers({
  heroes: heroesReducers,
  hero: singleHeroReducer,
});

export default rootReducers;
