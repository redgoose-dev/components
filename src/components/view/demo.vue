<template>
<article class="demo">
  <div class="demo__wrap">
    .demo
  </div>
</article>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';

onMounted(() => {
  document.querySelector('html').classList.add('mode-modal');
});
onUnmounted(() => {
  document.querySelector('html').classList.remove('mode-modal');
});
</script>

<style src="./demo.scss" lang="scss" scoped>

</style>
