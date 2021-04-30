import actionType from '../actions/actionTypes';

export default function loadPokemonReducer(state = [], { type, pokemons }) {
  switch (type) {
    case actionType.LOAD_POKEMONS:
      return [...state, pokemons];

    default:
      return state;
  }
}
