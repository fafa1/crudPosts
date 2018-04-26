
<template>
  <div class="posts">
    <h1>Posts</h1>
    This file will list all the posts.
    <div v-for="post in posts" :key="post.id">
      <p>
        <span><b>{{ post.title }}</b></span><br />
        <span>{{ post.description }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import PostsService from '@/services/PostsService'
export default {
  name: 'posts',
  data () {
    return {
      posts: []
    }
  },
  mounted () { //ver essa função
    this.getPosts()
  },
  methods: {
    async getPosts () {
      const response = await PostsService.fetchPosts()
      this.posts = response.data //posso fazer o retorno do erro tb, ele passa 2 parametros results e error
    }
  }
}
</script>