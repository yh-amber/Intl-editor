import { createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex';
import store from './store';

describe('store.ts', () => {
  it('render a store for with initation', () => {
    const localVue = createLocalVue()
    localVue.use(Vuex)

    const storeConfig = new Vuex.Store(store)
    expect(storeConfig.state.headers).toBe([])

    storeConfig.commit('setContents', { headers: ['en-US'], contents: {} })
    expect(storeConfig.state.headers).toBe(['en-US']);
  })
})