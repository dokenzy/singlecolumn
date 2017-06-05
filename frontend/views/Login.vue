<template>
  <div>
    <h1>Login</h1>
    <button @click="login">Log in</button>
  </div>
</template>

<script>
  export default {
    name: 'login',

    data () {
      return {
        user: {
          username: 'admin',
          password: 'anfdavnl'
        }
      }
    },

    methods: {
      login () {
        this.$store.dispatch('login', this.user).then(() => {
          this.$router.push('/')
        })
      }
    }
  }
</script>
