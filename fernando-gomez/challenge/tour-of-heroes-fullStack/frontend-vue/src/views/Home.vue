<template>
  <div class="home">
    <Counter />
    <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Counter from '@/components/Counter/index.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Counter,
  },
};
</script>
