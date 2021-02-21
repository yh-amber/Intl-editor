import RootState from './types';

export function setContents(state:RootState, payload: any) {
  state.headers = [...payload.headers];
  state.contents = {...payload.contents};
}

export function setEditingMessage(state:RootState, payload: any) {
  state.editingId = payload.id;
  state.editingValues = {...payload.values};
}

export function completeModification(state:RootState) {
  state.editingId = '';
  state.editingValues = {};
}

export function castOffChange(state:RootState) {
  state.editingId = '';
  state.editingValues = {};
}