// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueProgressBar from 'vue-progressbar'
import Vuetify from 'vuetify'
import lodash from 'lodash'
import VueLodash from 'vue-lodash/dist/vue-lodash.min'
 
Vue.use(VueLodash, lodash)

/**
 * Use Vutify's components
 */
Vue.use(Vuetify)

/**
 * Use and config the progress bar
 */
Vue.use(VueProgressBar, {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
