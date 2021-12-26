<template>
<div class="empty">
  <div class="empty__wrap">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"/>
      <polyline points="13 11 9 17 15 17 11 23"/>
    </svg>
    <p>No item</p>
  </div>
</div>
</template>

<script setup>
//
</script>

<style lang="scss" scoped>
.empty {
  &__wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    aspect-ratio: 16 / 7;
    background: rgb(var(--color-fill) / 2%);
    box-shadow: inset 5px 5px 30px rgb(0 0 0 / 8%);
    border-radius: 2px;
    svg {
      display: block;
      width: 72px;
      height: 72px;
      stroke-width: .5;
      color: rgb(var(--color-fill));
    }
    p {
      margin: 16px 0 0;
      font-size: 14px;
      color: rgb(var(--color-fill));
      font-weight: 600;
      letter-spacing: -.5px;
      line-height: 1.15;
      user-select: none;
    }
  }
}
</style>
