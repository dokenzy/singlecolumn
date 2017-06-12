<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <q-layout>
      <div slot="header" class="toolbar">
        <q-toolbar-title :padding="1">
          Single Column
        </q-toolbar-title>
      </div>
      <q-tabs slot="navigation">
        <q-tab icon="home" route="/" exact replace>Home</q-tab>
        <q-tab icon="vpn_key" route="/login" exact replace v-if="! isAuthenticated()">Log in</q-tab>
        <q-tab icon="person" route="/profile" exact replace v-if="isAuthenticated()">Profile</q-tab>
        <q-tab icon="exit_to_app" v-if="isAuthenticated()" @selected="logout">Logout</q-tab>
      </q-tabs>
      <router-view class="layout-view"></router-view>
    </q-layout>
  </div>
</template>

<script>
  export default {
    name: 'app',

    data () {
      return {
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
