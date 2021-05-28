import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    count: 0,
    pokemons: [{ 1: 'hola' }],
  },
  getters: {
    getCount(state) {
      return state.count;
    },
    getPokemons(state) {
      return state.pokemons;
    },
  },
  mutations: {
    increaseOne(state) {
      state.count += 1;
    },
    decreaseOne(state) {
      state.count -= 1;
    },
    updatePokemons(state: any, payload) {
      state.pokemons = [...payload];
    },
  },
  actions: {
    getPokemonsFromApi({ commit }) {
      axios.get('https://pokeapi.co/api/v2/pokemon/').then((response) => {
        console.log(response.data);
        commit('updatePokemons', response.data.results);
      });
    },
  },
  modules: {
  },
});
