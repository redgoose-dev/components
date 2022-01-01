<template>
<article class="view">
  <Loading v-if="state.loading" class="view__loading"/>
  <Error v-else-if="state.error?.code" :message="state.error.message" class="view__error"/>
  <div v-else class="content view__content">
    <header class="content__header">
      <h1>{{state.content.title}}</h1>
      <p>{{state.content.description}}</p>
    </header>
    <section class="content__meta">
      <ul>
        <li>Category: <strong>{{state.content.category}}</strong></li>
        <li>Path: <strong>/public/projects/{{state.content.path}}/</strong></li>
        <li><strong><a :href="url" target="_blank">{{url}}</a></strong></li>
      </ul>
    </section>
    <nav class="content__demo-button">
      <button type="button" @click="onClickDemo">Open Demo</button>
    </nav>
    <hr class="content__line">
    <div v-html="readme" class="content__body redgoose-body"></div>
  </div>
</article>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { marked } from 'marked';
import { index, categories } from '../libs/db';
import * as preference from '../preference';
import Loading from '../components/view/loading.vue';
import Error from '../components/view/error.vue';

const route = useRoute();
const state = reactive({
  loading: true,
  error: {},
  tagName: '',
  content: {},
});
const readme = computed(() => {
  if (!state.content.readme) return '';
  return marked(state.content.readme);
});
const url = computed(() => {
  return `${preference.githubUrl}${state.content.path}`;
});

async function loadData()
{
  const project = index.get(route.params.project);
  if (!project) throw new Error('not-page');
  let readme = await fetch(`/components/projects/${project.path}/README.md?raw`);
  readme = await readme.text();
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
        message: 'Unknown error.',
      };
      break;
  }
  console.error('ERROR:', err.message);
}

function onClickDemo()
{
  window.open(`/components/projects/${state.content.path}/demo.html`);
}

// set route
loadData()
  .then((res) => {
    if (!res) throw new Error('no response');
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
