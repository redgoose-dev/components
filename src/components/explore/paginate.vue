<template>
<nav class="paginate">
  <div class="paginate__wrap">
    <button
      v-if="false"
      type="button"
      title="to first page"
      :disabled="props.modelValue <= 1"
      :class="[ 'paginate-item', 'paginate-item--far' ]"
      @click="onFirstPage">
      first
    </button>
    <button
      type="button"
      :title="`to ${props.range} page prev`"
      :disabled="pageBlock <= 0"
      :class="[ 'paginate-item', 'paginate-item--range' ]"
      @click="onPrevRange">
      range prev
    </button>
    <button
      v-if="false"
      type="button"
      title="to prev page"
      :disabled="props.modelValue <= 1"
      :class="[ 'paginate-item', 'paginate-item--near' ]"
      @click="onPrevPage">
      prev page
    </button>
    <template v-if="pages.length > 0">
      <button
        v-for="item in pages"
        type="button"
        :disabled="item.active"
        :title="`${item.key} page`"
        :class="[ 'paginate-item', 'paginate-item--number' ]"
        @click="go(item.key)">
        {{item.key}}
      </button>
    </template>
    <button
      v-if="false"
      type="button"
      title="to next page"
      :disabled="pageCount <= modelValue"
      :class="[ 'paginate-item', 'paginate-item--near' ]"
      @click="onNextPage">
      next page
    </button>
    <button
      type="button"
      :title="`to ${props.range} page next`"
      :disabled="pageBlock >= pageBlockTotal"
      :class="[ 'paginate-item', 'paginate-item--range' ]"
      @click="onNextRange">
      range next
    </button>
    <button
      v-if="false"
      type="button"
      title="to last page"
      :disabled="modelValue >= pageCount"
      :class="[ 'paginate-item', 'paginate-item--far' ]"
      @click="onLastPage">
      last
    </button>
  </div>
</nav>
</template>

<script setup>
import { computed } from 'vue';
const props = defineProps({
  modelValue: { type: Number, default: 1 },
  total: { type: Number, default: 0 },
  size: { type: Number, default: 10 },
  range: { type: Number, default: 5 },
});
const emits = defineEmits([ 'update:modelValue' ]);
const pageCount = computed(() => (Math.ceil(props.total / props.size)));
const offset = computed(() => ((props.modelValue - 1) * props.size));
const pageBlock = computed(() => (Math.floor((props.modelValue - 1) / props.range)));
const pageBlockTotal = computed(() => (Math.floor((pageCount.value - 1) / props.range)));
const pages = computed(() => {
  let items = [];
  let startPage = pageBlock.value * props.range + 1;
  for (let i = 1; i < props.range + 1 && startPage <= pageCount.value; i++, startPage++)
  {
    items[i - 1] = {
      key: startPage,
      active: (startPage === props.modelValue),
    };
  }
  // check empty item
  let checkEmpty = false;
  items.forEach(o => {
    if (o.active) checkEmpty = true;
  });
  return checkEmpty ? items : [];
});

function onPrevPage()
{
  if (props.modelValue > 1) go(props.modelValue - 1);
}
function onNextPage()
{
  if (props.modelValue < pageCount.value) go(props.modelValue + 1);
}

function onPrevRange()
{
  if (props.modelValue > 1)
  {
    let n = props.modelValue - props.range;
    go((n > 1) ? n : 1);
  }
}
function onNextRange()
{
  if (pageBlock.value < pageBlockTotal.value)
  {
    let n = props.modelValue + props.range;
    go(n > pageCount.value ? pageCount.value : n);
  }
}

function onFirstPage()
{
  if (props.modelValue > 1) go(1);
}
function onLastPage()
{
  if (props.modelValue < pageCount.value) go(pageCount.value);
}

function go(page)
{
  if (props.modelValue !== page) emits('update:modelValue', page);
}
</script>

<style lang="scss" scoped>
@use '../../assets/scss/mixins';
.paginate {
  &__wrap {
    display: flex;
    justify-content: center;
  }
}
</style>
