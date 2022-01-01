<template>
<div class="loading">
  <div class="loading__wrap">
    <svg class="loading__spinner" viewBox="0 0 50 50">
      <linearGradient id="strokeColors" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="rgb(30 190 150)"></stop>
        <stop offset="100%" stop-color="rgb(100 52 230)"></stop>
      </linearGradient>
      <circle
        cx="25" cy="25" r="20"
        fill="none"
        stroke="url(#strokeColors)"/>
    </svg>
    <p class="loading__message">loading..</p>
  </div>
</div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/mixins';
.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 65vw;
  max-height: 420px;
  user-select: none;
  &__spinner {
    animation: rotate 2s linear infinite;
    z-index: 2;
    width: 80px;
    height: 80px;
    circle {
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
      stroke-width: 6;
    }
  }
  &__message {
    margin: 16px 0 0;
    text-align: center;
    font-family: var(--font-eng);
    font-size: 14px;
    color: rgb(var(--color-fill-weak));
    line-height: 1.25;
  }
  @include mixins.responsive(tablet) {
    &__spinner {
      width: 120px;
      height: 120px;
      circle {
        stroke-width: 5;
      }
    }
    &__message {
      margin-top: 20px;
      font-size: 16px;
    }
  }
}
@keyframes rotate {
  100% { transform: rotate(360deg); }
}
@keyframes dash {
  0% { stroke-dasharray: 1, 150; stroke-dashoffset: 0; }
  50% { stroke-dasharray: 90, 150; stroke-dashoffset: -35; }
  100% { stroke-dasharray: 90, 150; stroke-dashoffset: -124; }
}
</style>
