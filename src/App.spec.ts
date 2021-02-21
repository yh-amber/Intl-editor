import { shallowMount } from '@vue/test-utils';
import App from './App.vue';

describe('App.vue', () => {
  it('render the application init page', () => {
    const component = shallowMount(App);
    expect(component.find('h3').exists()).toBe(true);
  })
})