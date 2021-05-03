import { combineReducers } from 'redux';
import heroesReducer from './herosReducer';
import selectedHeroReducer from './selectedHerosReducer';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  selectedHero: selectedHeroReducer
});

export default rootReducer;
