<template>
  <div>
    The count: {{ count }}
    <button @click="increment()">
      +
    </button>
    <button @click="decrement()">
      -
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Counter',
  methods: {
    increment() {
      this.$store.commit('increment');
    },
    decrement() {
      this.$store.commit('decrement');
    },
  },
  computed: mapState([
  // map this.count to store.state.count
    'count',
  ]),
};
</script>