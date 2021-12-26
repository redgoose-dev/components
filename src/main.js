import { createApp } from 'vue';
import router from './router';
import App from './app.vue';
import { initCustomEvent } from './libs/util';

import './assets/scss/main.scss';
import 'redgoose-content-body/dist/body.css';

// play util
// initCustomEvent();

createApp(App)
  .use(router)
  .mount('#app');
