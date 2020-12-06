import RootState from './types';

export function setContents(state:RootState, payload: RootState) {
  state.headers = payload.headers;
  state.contents = payload.contents;
}