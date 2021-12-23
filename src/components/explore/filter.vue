<template>
<aside class="filter">
  <h1 class="filter__title">Filter</h1>
  <form class="filter__form" @submit.prevent="">
    <fieldset class="filter__fieldset">
      <legend>Items filter</legend>
      <div class="filter-field">
        <label for="category" class="filter-field__label">Category</label>
        <p class="filter-field__body">
          <select name="category" id="category">
            <option value="apple">apple</option>
          </select>
        </p>
      </div>
      <div class="filter-field">
        <label for="keyword" class="filter-field__label">Keyword</label>
        <p class="filter-field__body">
          <input
            type="text"
            name="keyword"
            id="keyword"
            placeholder="Search keyword"
            maxlength="20">
        </p>
      </div>
    </fieldset>
  </form>
</aside>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.filter {
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
    margin: 16px 0 0;
  }
}
.filter-field {
  font-size: 0;
  & + .filter-field {
    margin-top: 12px;
  }
  &__label {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: -.5px;
    line-height: 1.15;
  }
  &__body {
    margin: 5px 0 0;
    font-size: 12px;
    color: rgb(var(--color-fill-weak));
    input,
    select {
      display: block;
      margin: 0;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid rgb(var(--color-fill-weak) / 25%);
      border-radius: 2px;
      height: 32px;
      &:focus-visible {
        outline: 2px solid rgb(var(--color-main) / 100%);
      }
    }
    input {
      padding: 0 10px;
    }
    select {
      padding: 0 10px;
    }
  }
}
</style>
