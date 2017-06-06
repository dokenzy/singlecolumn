<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label for="username">
        ID:
        <input type="text" id="username" v-model="user.username" />
      </label>
      <label for="password">
        Password:
        <input type="password" id="password" v-model="user.password" />
      </label>
      <button type="submit">Log in</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'login',

    data () {
      return {
        user: {
          username: '',
          password: ''
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
