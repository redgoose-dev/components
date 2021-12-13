<template>
<header class="layout-header">
  <div class="layout-header__wrap">
    <div class="layout-header__body">
      <h1>Components</h1>
      <nav>
        <button type="button">media</button>
        <button type="button">navigation</button>
      </nav>
    </div>
    <aside>
      <a href="https://github.com/redgoose-dev/components" target="_blank">GitHub</a>
    </aside>
  </div>
</header>
<div class="container">
  <router-view/>
</div>
<footer class="layout-footer">
  .footer
</footer>
</template>

<script setup>
import { computed, defineAsyncComponent } from 'vue';
</script>

<style lang="scss" scoped>
.layout-header {
  border: 1px solid red;
}
.container {
  border: 1px solid #000;
}
.layout-footer {
  border: 1px solid blue;
}
</style>
