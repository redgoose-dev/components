import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('./screen/index.vue'),
  },
  {
    path: '/view/:project',
    name: 'View',
    component: () => import('./screen/view.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// router.afterEach((to, from) => {
//   console.log(to, from);
// });

export default router;
