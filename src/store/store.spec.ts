import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import store from './store';

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store.ts', () => {
  let storeConfig: any;

  beforeEach(() => {
    storeConfig = new Vuex.Store(store)
  });

  it('render a store for with initation', () => {
    expect(storeConfig.state.headers).toBe([])

    storeConfig.commit('setContents', { headers: ['en-US'], contents: {} })
    expect(storeConfig.state.headers).toBe(['en-US']);
  })
})