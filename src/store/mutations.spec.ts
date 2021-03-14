import RootState from './types';
import { setContents, setEditingMessage, completeModification, castOffChange } from './mutations';
import { initialState } from './store';

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

  it('should handle setEditingMessage', () => {
    const state:RootState = initialState;
    const payload = {
      id: 'navbar.home',
      values: { 'en-US': 'Home' }
    };

    setEditingMessage(state, payload);
    expect(state.editingId).toEqual('navbar.home');
  })

  it('should handle completeModification', () => {
    const state:RootState = {
      ...initialState,
      editingId: 'navbar.home'
    };

    completeModification(state);
    expect(state.editingId).toEqual('');
  })

  it('should handle castOffChange', () => {
    const state:RootState = {
      ...initialState,
      editingId: 'navbar.home'
    };

    castOffChange(state);
    expect(state.editingId).toEqual('');
  })
})