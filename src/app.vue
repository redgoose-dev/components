<template>
<header class="layout-header">
  <div class="layout-header__wrap">
    <div class="layout-header__body">
      <h1 class="layout-header__title">
        <router-link to="/">
          Components
        </router-link>
      </h1>
      <nav class="layout-header__navigation">
        <router-link to="/">Explore</router-link>
        <a href="https://github.com/redgoose-dev/components" target="_blank">GitHub</a>
      </nav>
    </div>
<!--    <aside></aside>-->
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
import { reactive, computed } from 'vue';

const state = reactive({
  copyright: window.AUTHOR,
});
const author = window.AUTHOR;
const currentYear = new Date().getFullYear();
</script>

<style src="./app.scss" lang="scss" scoped></style>
