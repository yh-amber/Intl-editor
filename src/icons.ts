import Vue from 'vue';
import SvgIcon from './components/svg-icon.vue';

Vue.component("svg-icon", SvgIcon);

const req = require.context('../assets', false, /\.svg$/);
const requireAll = (reqireContext:any) => reqireContext.keys().map(reqireContext);
requireAll(req);