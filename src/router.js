import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: `/components/`,
    name: 'Explore',
    component: () => import('./screen/explore.vue'),
  },
  {
    path: `/components/view/:project`,
    name: 'View',
    component: () => import('./screen/view.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
