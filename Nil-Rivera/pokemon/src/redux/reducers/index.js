import { combineReducers } from 'redux';
import pokemons from './loadPokemonsReducer';

const rootReducer = combineReducers({
  pokemons,
});

export default rootReducer;
