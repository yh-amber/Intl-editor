import Vue from 'vue';
import VueX from 'vuex';
import {
  initBoardData,
  onEditMessage,
  onConfirmChange,
  onLeaveChange
} from './actions';
import {
  setContents,
  getEditingMessage,
  completeModification,
  castOffChange
} from './mutations';

Vue.use(VueX);

export const initialState = {
  headers: [],
  contents: {},
  editingId: '',
  editingValues: {},
};

const store = new VueX.Store({
  state: initialState,
  mutations: {
    setContents,
    getEditingMessage,
    completeModification,
    castOffChange
  },
  actions: {
    initBoardData,
    onEditMessage,
    onConfirmChange,
    onLeaveChange
  }
})

export default store