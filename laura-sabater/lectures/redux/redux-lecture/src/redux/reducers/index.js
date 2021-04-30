import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import selectedHeroReducer from './selectedHeroReducer';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  selecteHero: selectedHeroReducer,
});

export default rootReducer;
