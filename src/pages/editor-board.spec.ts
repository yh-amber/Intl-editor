import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import EditorBoard from './editor-board.vue';

const localVue = createLocalVue();

localVue.use(Vuex)

describe('editor-board.vue', () => {
  let actions
  let store: any

  beforeEach(() => {
    actions = {
      initBoardData: jest.fn()
    };
    store = new Vuex.Store({
      state: {
        headers: ['en-US', 'zh-Hans-CN'],
        contents: {}
      },
      actions,
    });
  })

  it('render the intl message table', () => {
    const component = shallowMount(EditorBoard, { store, localVue });
    expect(component.find('table').exists()).toBe(true);
  })
})