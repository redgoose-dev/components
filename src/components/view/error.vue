<template>
<div class="error">
  <div class="error__wrap">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="error__icon">
      <line x1="16" y1="13" x2="16" y2="21"/>
      <line x1="8" y1="13" x2="8" y2="21"/>
      <line x1="12" y1="15" x2="12" y2="23"/>
      <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>
    </svg>
    <p class="error__message">{{props.message}}</p>
  </div>
</div>
</template>

<script setup>
const props = defineProps({
  message: String,
});
</script>

<style lang="scss" scoped>
@use '../../assets/scss/mixins';
.error {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 85vw;
  max-height: 480px;
  user-select: none;
  &__icon {
    display: block;
    margin: 0 auto;
    width: 72px;
    height: 72px;
    color: rgb(var(--color-main));
    stroke-width: 1.5;
  }
  &__message {
    margin: 16px 0 0;
    font-family: var(--font-eng);
    text-align: center;
    font-size: 14px;
    color: rgb(var(--color-fill-weak));
  }
  @include mixins.responsive(tablet) {
    &__icon {
      width: 120px;
      height: 120px;
    }
    &__message {
      margin-top: 20px;
      font-size: 20px;
      //letter-spacing: -.5px;
    }
  }
}
</style>
