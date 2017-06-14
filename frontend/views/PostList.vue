<template>
  <div>
    <h2>Posts</h2>
    <template v-for="post in posts">
      <h3>{{ post.title }}</h3>
      <p>{{ post.created_at }} by {{ post.user }}</p>
      <div>{{ post.content }}</div>
    </template>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        posts: []
      }
    },
    mounted () {
      axios({
        url: 'http://127.0.0.1:8000/api/posts/',
        method: 'get'
      }).then((response) => {
        this.posts = response.data;
      })
    }
  }
</script>
