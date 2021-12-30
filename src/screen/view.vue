<template>
<article class="view">
  <div v-if="state.loading" class="view__loading">.loading</div>
  <div v-else-if="state.error?.code" class="view__error">.error</div>
  <div v-else class="content view__content">
    <header class="content__header">
      <h1>{{state.content.title}}</h1>
      <p>{{state.content.description}}</p>
    </header>
    <section class="content__meta">
      <ul>
        <li>Category: <strong>{{state.content.category}}</strong></li>
        <li>Path: <strong>/src/projects/{{state.content.path}}</strong></li>
        <li><strong><a :href="url" target="_blank">{{url}}</a></strong></li>
      </ul>
    </section>
    <nav class="content__demo-button">
      <button type="button" @click="onClickDemo">Open Demo</button>
    </nav>
    <hr class="content__line">
    <div v-html="readme" class="content__body redgoose-body"></div>
  </div>
  <teleport to="#modals">
    <Demo v-if="state.openDemo"/>
  </teleport>
</article>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';
import tree from '../projects/tree';
import categories from '../projects/categories';
import * as preference from '../preference';
import Demo from '../components/view/demo.vue';

const route = useRoute();
const state = reactive({
  loading: true,
  openDemo: false,
  error: {},
  tagName: '',
  project: {},
  content: {},
});
const readme = computed(() => {
  if (!state.content.readme) return '';
  return marked(state.content.readme);
});
const url = computed(() => {
  return `${preference.githubUrl}${state.content.path}`;
});

async function fetch()
{
  const project = tree.get(route.params.project);
  if (!project) throw new Error('not-page');
  let readme = await import(`../projects/${project.path}/README.md?raw`);
  readme = readme.default;
  if (!readme) throw new Error('no-config');
  return {
    title: project.name,
    description: project.description,
    category: categories.get(project.category),
    path: project.path,
    readme,
  };
}

function error(err)
{
  switch (err.message)
  {
    case 'not-page':
      state.error = {
        code: 404,
        message: 'Not found.',
      };
      break;
    case 'no-config':
    default:
      state.error = {
        code: 500,
        message: 'Internal Server Error.',
      };
      break;
  }
}

function onClickDemo()
{
  console.log('click demo');
}

// set route
fetch()
  .then((res) => {
    state.content = res;
    state.error = undefined;
    state.loading = false;
  })
  .catch(e => {
    state.content = {};
    state.loading = false;
    error(e);
  });
</script>

<style src="./view.scoped.scss" lang="scss" scoped></style>
<style src="./view.scss" lang="scss"></style>
