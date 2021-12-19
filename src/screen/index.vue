<template>
<article class="explorer">
  <aside class="explorer__side">
    .side
  </aside>
  <div class="explorer__body">
    <ul>
      <li v-for="o in Array(99)">
        <router-link to="/view/mediaSource">mediaSource</router-link>
      </li>
    </ul>
  </div>
</article>
</template>

<script setup>
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

onBeforeRouteUpdate(async (to, from) => {
  console.log('call onBeforeRouteUpdate()');
});
</script>

<style lang="scss" scoped>
.explorer {
  display: grid;
  grid-template-columns: 220px 1fr;
  align-items: flex-start;
  &__side {
    position: sticky;
    top: 88px;
    border: 1px solid red;
  }
  &__body {
    margin: 0 0 0 30px;
    border: 1px solid blue;
  }
}
</style>
