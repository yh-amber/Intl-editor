import { shallowMount } from '@vue/test-utils';
import MessageRow from './message-row.vue';

describe('svg-icon.vue', () => {
  let component: any;
  let propsData: any;

  beforeEach(() => {
    propsData = {
      iconName: 'nav.home',
      className: '',
      onClick: jest.fn()
    }

    component = shallowMount(MessageRow, {
      propsData
    });
  })

  it('should render the svg icon', () => {
    expect(component.find('svg').exists()).toBe(true);
  })

  it('should render the svg icon', () => {
    expect(component.find('svg').props('class')).toEqual('svg-icon');
    propsData.className = 'edit-color';
    component = shallowMount(MessageRow, {
      propsData
    });
    expect(component.find('svg').props('class')).toEqual('svg-icon edit-color');
  })
})