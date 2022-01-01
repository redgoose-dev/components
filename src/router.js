import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: `/`,
    name: 'Explore',
    component: () => import('./screen/explore.vue'),
  },
  {
    path: `/view/:project`,
    name: 'View',
    component: () => import('./screen/view.vue'),
  },
];

const router = createRouter({
  base: '/',
  history: createWebHashHistory(),
  routes,
});

export default router;
