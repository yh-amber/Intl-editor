import Vue from 'vue';
import VueX from 'vuex';
import {
  initBoardData,
  onEditMessage,
  onDeleteRowData,
  onConfirmChange,
  onLeaveChange
} from './actions';
import {
  setContents,
  setEditingMessage,
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
    setEditingMessage,
    completeModification,
    castOffChange
  },
  actions: {
    initBoardData,
    onEditMessage,
    onDeleteRowData,
    onConfirmChange,
    onLeaveChange
  }
})

export default store