import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(Router)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '*', component: PageNotFound }
]

export default new Router({
  mode: 'history',
  routes
})
