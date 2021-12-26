<template>
<article class="explorer">
  <header class="explorer__header">
    <h1>Explore</h1>
    <p>총 <strong>{{tree.size}}</strong>개의 컴포넌트가 등록되어 있습니다.</p>
  </header>
  <div class="explorer__wrap">
    <div class="explorer__body">
      <template v-if="items?.length > 0">
        <ul class="explorer__index">
          <li v-for="item in items">
            <Item
              :name="item.name"
              :path="item.path"
              :category="item.category"
              :description="item.description"/>
          </li>
        </ul>
        <Paginate
          :model-value="query.page"
          :total="state.total"
          :size="state.size"
          :range="state.range"
          class="explorer__paginate"
          @update:model-value="redirect({ page: $event })"/>
      </template>
      <Empty v-else class="explorer__empty"/>
    </div>
    <Filter
      class="explorer__side"
      @reset="onResetFilter"
      @submit="redirect({
        category: $event.category,
        keyword: $event.keyword,
      })"/>
  </div>
</article>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useRouter, useRoute, onBeforeRouteUpdate } from 'vue-router';
import tree from '../projects/tree';
import categories from '../projects/categories';
import * as preference from '../preference';
import { convertQueryString } from '../libs/util';
import Filter from '../components/explore/filter.vue';
import Item from '../components/explore/item.vue';
import Paginate from '../components/explore/paginate.vue';
import Empty from '../components/explore/empty.vue';

const router = useRouter();
const route = useRoute();
const state = reactive({
  total: tree.size,
  size: preference.explore.size,
  range: preference.explore.range,
});
const query = reactive({
  category: route.query.category || '',
  keyword: route.query.keyword || '',
  page: Number(route.query.page) || 1,
});
const items = computed(() => {
  let arr = [];
  for (const value of tree.values())
  {
    let use = true;
    if (query.category && value.category !== query.category) use = false;
    if (query.keyword && !RegExp(`${query.keyword}`, 'i').test(value.path)) use = false;
    if (use)
    {
      arr.push({
        ...value,
        category: categories.get(value.category),
      });
    }
  }
  state.total = arr.length;
  return arr.splice((query.page - 1) * state.size, state.size);
});

function redirect(src)
{
  let params = {
    ...query,
    ...src,
  };
  if (!params.category) delete params.category;
  if (!params.keyword) delete params.keyword;
  if (!(params.page > 1)) delete params.page;
  router.push(`/?${convertQueryString(params)}`);
}

function onResetFilter()
{
  redirect({
    category: undefined,
    keyword: undefined,
    page: undefined,
  });
}

onBeforeRouteUpdate(to => {
  query.page = Number(to.query.page) || 1;
  query.category = to.query.category;
  query.keyword = to.query.keyword;
});
</script>

<style src="./explore.scss" lang="scss" scoped></style>
