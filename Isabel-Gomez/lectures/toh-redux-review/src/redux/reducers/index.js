import { combineReducers } from 'redux';
import HeroReducers from './heroReducer';
import SingleHeroReducers from './singleHeroReducer';

const rootReducers = combineReducers({
  heroes: HeroReducers,
  hero: SingleHeroReducers,
});

export default rootReducers;
