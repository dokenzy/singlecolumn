<template>
  <div>
    <h2>{{ post.title }}</h2>
    <p>at {{ post.updated_at }}</p>
    <p>by {{ post.user }}</p>
    <div>{{ post.content }}</div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        post: {}
      }
    },
    mounted () {
      const id = this.$route.params.id;
      console.log(id);
      axios({
        url: `http://127.0.0.1:8000/api/posts/${id}/`,
        method: 'get'
      }).then((response) => {
        this.post = response.data;
      })
    }
  }
</script>
