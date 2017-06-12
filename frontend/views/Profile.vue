<template>
  <div>
    <div class="card">
    <div class="card-title">
      <h4>Profile</h4>
    </div>
      <div v-if="user.username !== ''" class="card-content">
        <p>ID: {{ user.username }}</p>
      </div>
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
