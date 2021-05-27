<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Counter/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Counter from '@/components/Counter.vue';

export default defineComponent({
  components: {
    Counter,
  },
  setup() {
    return {};
  },
});

</script>
