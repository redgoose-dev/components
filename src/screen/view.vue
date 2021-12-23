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
        <li>Relative path: <strong>/src/projects/{{state.project.path}}</strong></li>
        <li><strong><a :href="state.content.url" target="_blank">{{state.content.url}}</a></strong></li>
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
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import { marked } from 'marked';
import tree from '../projects/tree';
import categories from '../projects/categories';

const route = useRoute();
const state = reactive({
  loading: true,
  error: {},
  tagName: '',
  project: {},
  content: {},
});
const readme = computed(() => {
  if (!state.content.readme) return '';
  return marked(state.content.readme);
});

async function fetch()
{
  const project = tree.get(route.params.project);
  if (!project) throw new Error('not-page');
  let [ config, readme ] = await Promise.all([
    import(`../projects/${project.path}/config.js`),
    import(`../projects/${project.path}/README.md?raw`),
  ].filter(Boolean));
  config = config.default;
  readme = readme.default;
  if (!(config && readme)) throw new Error('no-config');
  state.project = project;
  state.content = {
    title: config.title,
    description: config.description,
    category: categories.get(project.category),
    url: config.url,
    readme,
  };
  return {
    project,
    config,
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
  .then(() => {
    state.error = undefined;
    state.loading = false;
  })
  .catch(e => {
    console.error(e);
    state.loading = false;
    state.content = {};
    error(e);
  });

// leave this page
onBeforeRouteLeave((to, from) => {
  console.log('call onBeforeRouteLeave()');
});
</script>

<style src="./view.scss" lang="scss" scoped></style>
<style lang="scss">
.content {
  &__body {
    --size-margin-vertical: 1rem;
    --size-text: 15px;
    --color-text: rgb(var(--color-fill));
    --color-text-title: rgb(var(--color-fill));
    --color-text-key: rgb(var(--color-main));
    --color-text-code: rgb(var(--color-main));
    //--color-content-bg: red;
    //--color-content-line: lime;
    --size-text-length: 1.45;
    pre {
      background: linear-gradient(135deg, rgb(99 70 206 / 80%) 0%, rgb(56 193 159 / 90%) 100%);
      border-radius: 2px;
      color: rgb(var(--color-bg));
      padding: 1.5rem;
      > code {
        color: rgb(var(--color-bg));
        //font-weight: 700;
        //font-family: var(--font-eng);
        //letter-spacing: .25px;
      }
    }
  }
}
</style>
