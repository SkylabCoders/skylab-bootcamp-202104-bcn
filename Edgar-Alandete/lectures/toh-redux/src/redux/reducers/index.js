import { combineReducers } from 'redux';
import heroes from './heroesReducer';
import selectedHero from './selectedHeroReducer';

const rootReducer = combineReducers({
  heroes,
  selectedHero,
});

export default rootReducer;
