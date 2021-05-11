import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import selectedHeroReducer from './selectedheroReducer';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  selectedHero: selectedHeroReducer
});

export default rootReducer;
