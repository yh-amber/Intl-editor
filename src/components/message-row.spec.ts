import { shallowMount } from '@vue/test-utils';
import MessageRow from './message-row.vue';

describe('editor-board.vue', () => {
  it('render the editor table row', () => {
    const component = shallowMount(MessageRow, {
      propsData: {
        mid: 'nav.home',
        value: {
          'en-US': 'Home',
          'zh-Hans-CN': '首页',
        }
      }
    });
    expect(component.find('tr').exists()).toBe(true);
  })
})