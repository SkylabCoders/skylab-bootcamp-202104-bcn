import { combineReducers } from 'redux';
import heroesReducer from './heroesReducer';
import selectedHeroReducer from './selectedHeroReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  heroes: heroesReducer,
  selectedHero: selectedHeroReducer,
  auth: authReducer
});

export default rootReducer;
