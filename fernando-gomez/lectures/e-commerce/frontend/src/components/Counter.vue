<template>
    <h2>My counter</h2>
    <p>{{ getCount }}</p>
    <button type="button" @click="increaseOne">+</button>
    <button type="button" @click="decreaseOne">-</button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { mapGetters, mapMutations } from 'vuex';

export default defineComponent({
  computed: {
    ...mapGetters([
      'getCount',
    ]),
  },
  methods: {
    ...mapMutations([
      'increaseOne',
      'decreaseOne',
    ]),
  },
  setup() {
    return { };
  },
});
</script>

<style>
</style>
