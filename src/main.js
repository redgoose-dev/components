import './assets/scss/main.scss';

const $main = document.querySelector('main');


import CompMedia from './components/Media';
import CompRedLine from './components/RedLine';

customElements.define('comp-media', CompMedia);
customElements.define('comp-red-line', CompRedLine);
