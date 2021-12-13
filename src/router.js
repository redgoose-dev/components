import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('./screen/index.vue'),
  },
  {
    path: '/view',
    name: 'View',
    component: () => import('./screen/view.vue'),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
})
