import Vuex from 'vuex';
import { shallowMount, createLocalVue } from '@vue/test-utils';
import MessageRow from './message-row.vue';

const localVue = createLocalVue()

localVue.use(Vuex)

describe('message-row.vue', () => {
  let store: any

  const propsData = {
    mid: 'nav.home',
    value: {
      'en-US': 'Home',
      'zh-Hans-CN': '首页',
    }
  }

  beforeEach(() => {
    store = new Vuex.Store({
      state: {
        editingId: '',
        contents: {
          'en-US': 'Home',
          'zh-Hans-CN': '首页'
        }
      },
      actions: {
        onEditMessage: jest.fn(),
        onConfirmChange: jest.fn(),
        onLeaveChange: jest.fn(),
        onDeleteRowData: jest.fn()
      },
    });
  })

  it('should render the editor table row', () => {
    const component = shallowMount(MessageRow, {
      propsData,
      store,
      localVue,
    });
    expect(component.find('tr').exists()).toBe(true);
  })
})