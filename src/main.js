import { createApp } from 'vue';
import router from './router';
import App from './app.vue';

import './assets/scss/main.scss';

// import { groupBy } from './libs/array';
// import preference from './preference.json';


// const components = groupBy(preference.components, 'category');
// console.log(components);

// import CompMedia from './components/media';
// import CompRedLine from './components/red-line';
//
// customElements.define('comp-media', CompMedia);
// customElements.define('comp-red-line', CompRedLine);

createApp(App)
  .use(router)
  .mount('#app');
