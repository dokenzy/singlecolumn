import Vue from 'vue'
import './themes/mat.styl'
import Quasar from 'quasar-framework'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './store'

const _axios = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/'
})
Vue.prototype.$axios = _axios
Vue.use(Quasar)

// eslint-disable-next-line no-new
new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});
