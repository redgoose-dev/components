<template>
<article class="view">
  <div v-if="state.loading" class="view__loading">.loading</div>
  <div v-else-if="state.error" class="view__error">.error</div>
  <div v-else class="content view__content">
    <header class="content__header">
      <h1>{{state.content.title}}</h1>
      <p>{{state.content.description}}</p>
    </header>
    <ul class="content__meta">
      <li>Category: <strong>{{state.content.category}}</strong></li>
      <li>Path: <strong>/src/projects/{{state.project.path}}</strong></li>
      <li>Tag name: <strong>&lt;{{state.project.tag}}/&gt;</strong></li>
    </ul>
    <div class="content__example">
      <component :is="state.tagName" v-bind="state.config.props"/>
    </div>
    <div v-html="readme" class="content__body redgoose-body"></div>
  </div>
</article>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useRoute, onBeforeRouteLeave } from 'vue-router';
import { marked } from 'marked';
import { tree, categories } from '../projects/tree';

const route = useRoute();
const state = reactive({
  loading: true,
  error: undefined,
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
  const tagName = `ext-${project.tag}`;
  let [ config, readme, component ] = await Promise.all([
    import(`../projects/${project.path}/config.js`),
    import(`../projects/${project.path}/README.md?raw`),
    !customElements.get(tagName) && import(`../projects/${project.path}`),
  ].filter(Boolean));
  config = config.default;
  readme = readme.default;
  if (!(config && readme)) throw new Error('no-config');
  if (component) customElements.define(tagName, component.default);
  return {
    project,
    tagName,
    config,
    readme,
  };
}

// set route
fetch()
  .then(res => {
    const { project, tagName, config, readme } = res;
    state.project = project;
    state.tagName = tagName;
    state.config = config;
    state.content = {
      title: config.title,
      description: config.description,
      category: project.category,
      readme,
    };
    state.error = undefined;
    state.loading = false;
  })
  .catch(e => {
    state.loading = false;
    state.content = {};
    switch (e.message)
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
    --color-text-code: rgb(var(--color-sub));
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
