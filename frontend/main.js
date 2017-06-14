import Vue from 'vue'
import './themes/mat.styl'
import Quasar from 'quasar-framework'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.prototype.$axios = axios
Vue.use(Quasar)

// eslint-disable-next-line no-new
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
