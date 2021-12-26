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
            <select
              name="category"
              id="category"
              v-model="state.category"
              @change="onSubmit">
              <option value="">Please select..</option>
              <option v-for="[key, name] in categories.entries()" :value="key">{{name}}</option>
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
                v-model="state.keyword"
                placeholder="Keyword.."
                maxlength="20">
            </label>
            <button type="submit" class="keyword-search__button">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </fieldset>
    <nav class="filter__nav">
      <button
        type="button"
        :disabled="disabledResetButton"
        @click="emits('reset')">
        Reset filter
      </button>
    </nav>
  </form>
</aside>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import categories from '../../projects/categories';
import { pureObject } from '../../libs/util';

const route = useRoute();
const state = reactive({
  category: route.query.category || '',
  keyword: route.query.keyword || '',
});
const emits = defineEmits([ 'submit', 'reset' ]);
const disabledResetButton = computed(() => {
  return !route.query.category && !route.query.keyword;
});

function onSubmit()
{
  emits('submit', pureObject(state));
}

onBeforeRouteUpdate(to => {
  state.category = to.query.category || '';
  state.keyword = to.query.keyword || '';
});
</script>

<style src="./filter.scss" lang="scss" scoped></style>
