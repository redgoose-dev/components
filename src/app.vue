<template>
<header class="layout-header">
  <div class="layout-header__wrap">
    <div class="layout-header__body">
      <h1 class="layout-header__title">
        <router-link :to="`${rootUrl}/`">Components</router-link>
      </h1>
      <nav class="layout-header__navigation">
        <router-link :to="`${rootUrl}/`">Explore</router-link>
        <a href="https://github.com/redgoose-dev/components" target="_blank">GitHub</a>
      </nav>
    </div>
  </div>
</header>
<div class="container">
  <div class="container__wrap">
    <router-view/>
  </div>
</div>
<footer class="layout-footer">
  <div class="layout-footer__wrap">
    <p class="layout-footer__copyright">
      Copyright © {{currentYear}} {{author}} Inc.
    </p>
  </div>
</footer>
</template>

<script setup>
const rootUrl = window.ROOT;
const author = window.AUTHOR;
const currentYear = new Date().getFullYear();
</script>

<style src="./app.scss" lang="scss" scoped></style>
