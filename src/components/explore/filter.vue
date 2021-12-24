<template>
<aside class="filter">
  <h1 class="filter__title">Filter</h1>
  <form class="filter__form" @submit.prevent="onSubmit">
    <fieldset class="filter__fieldset">
      <legend>Items filter</legend>
      <div class="filter-field">
        <label for="category" class="filter-field__label">Category</label>
        <div class="filter-field__body">
          <label class="form-wrap form-wrap--select">
            <select name="category" id="category">
              <option value="apple">apple</option>
            </select>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </label>
        </div>
      </div>
      <div class="filter-field">
        <label for="keyword" class="filter-field__label">Keyword</label>
        <div class="filter-field__body">
          <nav class="keyword-search">
            <label class="form-wrap form-wrap--input keyword-search__body">
              <input
                type="text"
                name="keyword"
                id="keyword"
                placeholder="Search keyword"
                maxlength="20">
            </label>
            <button type="submit" class="keyword-search__button" @click="">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </fieldset>
  </form>
</aside>
</template>

<script setup>
function onSubmit()
{
  console.log('on submit');
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/mixins';
.filter {
  --form-height: 28px;
  &__title {
    margin: 0;
    line-height: 1.15;
    font-size: 18px;
    font-weight: 700;
  }
  &__fieldset {
    margin: 0;
    padding: 0;
    border: none;
    legend {
      font-size: 0;
      height: 0;
      overflow: hidden;
    }
  }
  &__form {
    margin: 24px 0 0;
  }
}
.filter-field {
  font-size: 0;
  & + .filter-field {
    margin-top: 16px;
  }
  &__label {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: -.5px;
    line-height: 1.15;
  }
  &__body {
    margin: 6px 0 0;
    font-size: 12px;
    color: rgb(var(--color-fill-weak));
  }
}
.form-wrap {
  display: block;
  position: relative;
  height: var(--form-height);
  box-sizing: border-box;
  border: 1px solid rgb(var(--color-fill-weak) / 50%);
  border-radius: 2px;
  transition: box-shadow 100ms ease-out;
  box-shadow: inset 2px 2px 4px rgb(0 0 0 / 10%);
  &:focus-within {
    box-shadow: inset 2px 2px 4px rgb(0 0 0 / 10%), 0 0 0 3px rgb(var(--color-main) / 30%);
  }
  input,
  select {
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 0 8px;
    font-size: 12px;
    background: none;
    border: none;
    outline: none;
  }
  &--text {}
  &--select {
    select {
      appearance: none;
    }
    svg {
      display: block;
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-50%);
      stroke-width: 2;
      color: rgb(var(--color-fill) / 100%);
      width: 16px;
      height: 16px;
    }
  }
}
.keyword-search {
  display: flex;
  box-sizing: border-box;
  &__body {
    flex: 1;
  }
  &__button {
    display: block;
    width: var(--form-height);
    border: none;
    margin-left: 5px;
    @include mixins.button-touch-options(false);
    border-radius: 2px;
    background: linear-gradient(135deg, rgb(99 70 206 / 70%) 0%, rgb(56 193 159 / 80%) 100%);
    &:active {
      box-shadow: 0 0 0 3px rgb(var(--color-main) / 30%);
    }
    svg {
      display: block;
      width: 14px;
      height: 14px;
      margin: 0 auto;
      stroke-width: 4;
      color: rgb(255 255 255 / 90%);
      filter: drop-shadow(0 0 1px rgb(0 0 0 / 50%));
    }
  }
}
</style>
