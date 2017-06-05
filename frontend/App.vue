<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Main Menu</h2>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li v-if="! isAuthenticated()"><router-link to="/login">Log in</router-link></li>
      <li v-else><a href="#" @click="logout">Logout</a></li>
      <li><router-link to="/page-not-found">Page not found</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',

    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },

    methods: {
      isAuthenticated () {
        return this.$store.getters.isAuthenticated;
      },
      logout () {
        this.$store.dispatch('logout')
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
