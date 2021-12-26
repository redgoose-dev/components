<template>
<nav class="paginate">
  <div class="paginate__wrap">
    <button
      type="button"
      :title="`to ${props.range} page prev`"
      :disabled="pageBlock <= 0"
      class="paginate__direction"
      @click="onPrevRange">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"/>
      </svg>
    </button>
    <template v-if="pages.length > 0">
      <button
        v-for="item in pages"
        type="button"
        :disabled="item.active"
        :title="`${item.key} page`"
        class="paginate__number"
        @click="go(item.key)">
        {{item.key}}
      </button>
    </template>
    <button
      type="button"
      :title="`to ${props.range} page next`"
      :disabled="pageBlock >= pageBlockTotal"
      class="paginate__direction"
      @click="onNextRange">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"/>
      </svg>
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

function go(page)
{
  if (props.modelValue !== page) emits('update:modelValue', page);
}
</script>

<style src="./paginate.scss" lang="scss" scoped></style>
