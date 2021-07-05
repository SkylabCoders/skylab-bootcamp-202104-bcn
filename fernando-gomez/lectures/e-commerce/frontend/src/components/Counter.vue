<template>
    <h2>My counter</h2>
    <p>{{ getCount }}</p>
    <button type="button" @click="increaseOne">+</button>
    <button type="button" @click="decreaseOne">-</button>
    <p>Pokemons:</p>
    <ul v-for='pokemon in getPokemons' :key="pokemon">
        <li>{{pokemon}}</li>
    </ul>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import {
  mapActions,
  mapGetters, mapMutations, useStore,
} from 'vuex';

export default defineComponent({
  computed: {
    ...mapGetters([
      'getCount',
      'getPokemons',
    ]),
  },
  methods: {
    ...mapMutations([
      'increaseOne',
      'decreaseOne',
    ]),
    ...mapActions([
      'getPokemonsFromApi',
    ]),
  },
  setup() {
    const store = useStore();
    store.dispatch('getPokemonsFromApi');
    return {};
  },

});
</script>

<style>
</style>
