import RootState from './types';
import { setContents } from './mutations';
import { initialState } from './store'

describe('mutations', () => {
  it('should setContents mutate correctly', () => {
    const state:RootState = initialState;
    const payload = {
      headers: ['en-US'],
      contents: {}
    };

    setContents(state, payload);
    expect(state.headers).toEqual(['en-US']);
  })
})