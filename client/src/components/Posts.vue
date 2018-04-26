<template>
    <div class="posts">
        <h1>Posts</h1>
        Todos os posts
        <div v-for="post in posts" :key="post.id">
             <p>
                <span><b>{{ post.titulo }}</b></span><br /><br />
                <span>{{ post.descricao }}</span>
            </p>
        </div>
    </div>
</template>

<script>
import PostsService from '@/services/PostsService'
/* eslint-disable */
 export default {
     name: 'posts',
     data(){
         return {
            posts: []
         }
     },
     mounted(){
         this.getPosts()
     },
     methods: {
         async getPosts(){
           const response = await PostsService.fetchPosts()
           this.posts = response.data
         }
     }
 }
</script>

<style>
    
</style>