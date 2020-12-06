import Vue from 'vue';
import App from './App.vue';
import store from './store/index';

new Vue({
  el: '#app',
  template: '<App />',
  store,
  components: { 
    'App': App
  }
})
