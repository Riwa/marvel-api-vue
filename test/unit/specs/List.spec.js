import Vue from 'vue'
import List from '@/components/List/List'
import VueProgressBar from 'vue-progressbar'
import Vuetify from 'vuetify';

let Promise = require('es6-promise').Promise;


Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})
Vue.use(Vuetify);

describe('List.vue', () => {
  it('should render the title', () => {
    const Constructor = Vue.extend(List)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('.t-title strong').textContent)
      .to.equal('Marvel')
  })
})
