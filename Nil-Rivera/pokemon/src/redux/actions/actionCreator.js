import axios from 'axios';
import url from './urls';
import actionTypes from './actionTypes';

export default function loadPokemonsFromApi() {
  return async (dispatch) => {
    const { data } = await axios(url);
    dispatch({
      type: actionTypes.LOAD_POKEMONS,
      pokemons: data.results,
    });
  };
}
