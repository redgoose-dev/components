<template>
<div class="explorer-item">
  <router-link to="/view/mediaSource" class="explorer-item__wrap">
    <h3 class="explorer-item__title">
      media-source
    </h3>
    <p class="explorer-item__meta">
      <span>Category: Media</span>
    </p>
    <p class="explorer-item__description">
      description text
    </p>
  </router-link>
</div>
</template>

<style lang="scss" scoped>
@use '../../assets/scss/mixins';
.explorer-item {
  &__wrap {
    display: block;
    padding: 16px;
    text-decoration: none;
    background: rgba(var(--color-fill) / 5%);
    border-radius: 2px;
    transition: box-shadow 120ms ease-out;
    @include mixins.button-touch-options(true);
    user-select: auto;
    background: linear-gradient(165deg, rgb(99 70 206 / 20%) 0%, rgb(56 193 159 / 20%) 100%);
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
    margin: 4px 0 0;
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
          box-shadow: 0 0 0 2px rgb(var(--color-main) / 100%);
        }
      }
    }
  }
}
</style>
