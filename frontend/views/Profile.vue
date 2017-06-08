<template>
  <div>
    <h1>Profile</h1>
    <div v-if="user.username !== ''">
      <p>ID: {{ user.username }}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        user: {
          username: ''
        }
      }
    },

    mounted () {
      const username = localStorage.getItem('username')
      axios({
        url: `http://localhost:8000/api/users/${username}/profile/`,
        method: 'get',
        headers: {
          Authorization: 'JWT ' + localStorage.getItem('token')
        }
      }).then((response) => {
        this.user.username = response.data.username;
      })
    }
  }
</script>
