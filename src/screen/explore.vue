<template>
<article class="explorer">
  <header class="explorer__header">
    <h1>Explore</h1>
    <p>총 {{0}}개의 컴포넌트가 등록되어 있습니다.</p>
  </header>
  <div class="explorer__wrap">
    <div class="explorer__body">
      <ul class="explorer__index">
        <li v-for="o in Array(20)">
          <Item/>
        </li>
      </ul>
      <Paginate
        v-model="state.page"
        :total="156"
        :size="10"
        :range="10"
        class="explorer__paginate"/>
    </div>
    <Filter class="explorer__side"/>
  </div>
</article>
</template>

<script setup>
import { reactive, watch } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';
import Filter from '../components/explore/filter.vue';
import Item from '../components/explore/item.vue';
import Paginate from '../components/explore/paginate.vue';

const state = reactive({
  page: 1,
});

onBeforeRouteUpdate(async (to, from) => {
  console.log('call onBeforeRouteUpdate()');
});

// watches
watch(() => state.page, (page, oldPage) => {
  console.log('change page:', page, oldPage);
  // TODO: 페이지 번호가 바꼈으니 데이터 목록 고치기
});
</script>

<style src="./explore.scss" lang="scss" scoped></style>
