import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: `${window.ROOT}/`,
    name: 'Explore',
    component: () => import('./screen/explore.vue'),
  },
  {
    path: `${window.ROOT}/view/:project`,
    name: 'View',
    component: () => import('./screen/view.vue'),
  },
];

const router = createRouter({
  base: '/',
  history: createWebHistory(),
  routes,
});

export default router;
