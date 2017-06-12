import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'

Vue.use(Router)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/profile', component: Profile }
]

export default new Router({
  mode: 'history',
  routes
})
