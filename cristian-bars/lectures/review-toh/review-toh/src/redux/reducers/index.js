import { combineReducers } from 'redux';
import heroesReducers from './heroes-reducers';
import singleHeroReducer from './single-hero-reducers';

const rootReducers = combineReducers({
  heroes: heroesReducers,
  hero: singleHeroReducer
});

export default rootReducers;
