import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import PostList from '../views/PostList.vue'
import PostDetail from '../views/PostDetail.vue'
import Profile from '../views/Profile.vue'

Vue.use(Router)

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/posts', component: PostList },
  { path: '/posts/:id', component: PostDetail, name: 'post-detail' },
  { path: '/profile', component: Profile }
]

export default new Router({
  mode: 'history',
  routes
})
