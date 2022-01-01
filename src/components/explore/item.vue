<template>
<div class="explorer-item">
  <router-link :to="`${rootUrl}/view/${props.path}`" class="explorer-item__wrap">
    <h3 class="explorer-item__title">{{props.name}}</h3>
    <p class="explorer-item__meta">
      <span>Category: {{props.category}}</span>
    </p>
    <p class="explorer-item__description">{{props.description}}</p>
  </router-link>
</div>
</template>

<script setup>
const rootUrl = window.ROOT;
const props = defineProps({
  name: String,
  path: String,
  category: String,
  description: String,
});
</script>

<style lang="scss" scoped>
@use '../../assets/scss/mixins';
.explorer-item {
  &__wrap {
    display: block;
    padding: 20px;
    text-decoration: none;
    background: rgba(var(--color-fill) / 5%);
    border-radius: 2px;
    transition: box-shadow 120ms ease-out;
    @include mixins.button-touch-options(false);
    user-select: auto;
    background: linear-gradient(165deg, rgb(99 70 206 / 15%) 10%, rgb(56 193 159 / 15%) 90%);
    &:focus-visible {
      box-shadow: 0 0 0 2px rgb(var(--color-sub) / 100%);
    }
  }
  &__title {
    display: block;
    margin: 0;
    color: rgb(var(--color-fill) / 100%);
    text-decoration: none;
    font-size: 16px;
    line-height: 1.05;
    font-weight: 700;
    letter-spacing: -.25px;
    @include mixins.text-single-line();
  }
  &__meta {
    margin: 2px 0 0;
    display: flex;
    flex-wrap: wrap;
    font-size: 10px;
    line-height: 1.25;
    color: rgb(var(--color-fill) / 75%);
    span {
      display: block;
      &:nth-child(n+2) {
        &:before {
          content: ', ';
        }
      }
    }
  }
  &__description {
    margin: 6px 0 0;
    font-size: 12px;
    line-height: 1.25;
    color: rgb(var(--color-fill) / 100%);
    @include mixins.text-single-line();
  }
  @media (hover: hover) {
    &:hover {
      .explorer-item {
        &__wrap {
          box-shadow: 0 0 0 2px rgb(var(--color-sub) / 100%);
        }
      }
    }
  }
}
</style>
