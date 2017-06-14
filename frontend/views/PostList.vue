<template>
  <div>
    <h2>Posts</h2>
    <template v-for="post in posts">
      <h3><router-link :to="{name: 'post-detail', params: {'id': post.id }}">{{ post.title }}</router-link></h3>
      <p>{{ post.created_at }} by {{ post.user }}</p>
      <div>{{ post.content }}</div>
    </template>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        posts: []
      }
    },
    mounted () {
      this.$axios({
        url: '/posts/',
        method: 'get'
      }).then((response) => {
        this.posts = response.data;
      })
    }
  }
</script>
