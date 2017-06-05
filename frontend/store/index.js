import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const LOGIN = 'LOGIN'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'


const getters = {
  isAuthenticated: (state, getters) => {
    return state.token
  }
}

const state = {
  token: !!localStorage.getItem('token')
};

const mutations = {
  [LOGIN] (state) {
    state.pendding = true
  },
  [LOGIN_SUCCESS] (state, token) {
    state.token = token;
    state.pendding = false;
  },
  [LOGOUT] (state) {
    state.token = null
  }
}

const actions = {
  login ({ commit }, payload) {
    commit('LOGIN');
    axios({
      url: 'http://localhost:8000/api/auth/token/',
      method: 'post',
      data: payload
    }).then((response) => {
      const token = response.data.token;
      localStorage.setItem('token', token);
      commit('LOGIN_SUCCESS', token);
    });
  },

  logout ({ commit }) {
    localStorage.removeItem('token');
    commit('LOGOUT');
  }
};

export default new Vuex.Store({
  getters,
  state,
  actions,
  mutations
});
