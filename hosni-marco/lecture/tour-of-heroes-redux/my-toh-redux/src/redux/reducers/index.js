import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import selectedHeroReducer from './selectedReducer';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  selectedHero: selectedHeroReducer
});
export default rootReducer;
