import Vue from 'vue';
import VueX from 'vuex';
import { initBoardData } from './actions';
import { setContents } from './mutations';

Vue.use(VueX);

const store = new VueX.Store({
  state: {
    headers: [],
    contents: {},
  },
  mutations: {
    setContents,
  },
  actions: {
    initBoardData,
  }
})

export default store