import Vue from 'vue';
import App from './App.vue';

const root = document.getElementById('#app')

new Vue({
  el: '#app',
  template: '<App />',
  components: { 
    'App': App
  }
})