<script>
import axios from 'axios'
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  },
  data() {
    return {
      blog: {
        title: '',
        body: '',
        category: {
          name: ''
        }
      },
      newComment: '',
      comments: []
    }
  },
  created() {
    this.fetchBlog()
  },
  methods: {
    fetchBlog() {
      const blogId = this.$route.params.id
      axios
        .get(`http://localhost:3000/blogs/${blogId}`)
        .then((response) => {
          this.blog = response.data
        })
        .catch((error) => {
          console.error(error)
        })
    },
    deleteBlog(){
      const blogId = this.$route.params.id
      axios
        .delete(`http://localhost:3000/blogs/${blogId}`)
        .then((response) => {
          console.log('Blog deleted:',response.data.title)
          this.$router.push('/')
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>
<template>
  <Navbar />
  <div class="blog-details-container">
    <div class="blog-card">
      <div class="title">
        <div>
          <h1 class="blog-title">{{ blog.title }}</h1>
          <h3>{{ blog.category ? blog.category.name : 'N/A' }}</h3>
        </div>
        <div>
          <button class="edit-btn" >
            <RouterLink :to="{name: 'edit',params: {id: blog.id} }">Edit</RouterLink>
          </button>
          <button class="delete-btn" @click="deleteBlog">Delete</button>
        </div>
      </div>
      <p class="blog-content">{{ blog.body }}</p>
    </div>
    <div class="comments-section">
      <div class="comment-box">
        <input v-model="newComment" type="text" placeholder="Write a comment..." />
        <button @click="addComment">Comment</button>
      </div>
      <div class="comments-list">
        <div v-for="comment in comments" :key="comment.id" class="comment">
          <p>{{ comment.text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.blog-details-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 20px;
}
.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.blog-card {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 800px;
  width: 100%;
  margin-bottom: 20px;
}

.blog-title {
  font-size: 2rem;
  font-weight: bold;
}

.edit-btn {
  padding: 8px 12px;
  font-size: 1rem;
  color: #fff;
  background-color: #fab405;
  border: none;
  border-radius: 7px;
  cursor: pointer;
}

.edit-btn a{
  color: #fff;
  text-decoration: none;
}

.delete-btn{
  margin-left: 10px;
  padding: 8px 12px;
  font-size: 1rem;
  color: #fff;
  background-color: #ea0202;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.blog-content {
  font-size: 1.2rem;
  line-height: 1.4;
  margin-top: 20px;
}

.comments-section {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 800px;
  width: 100%;
}

.comment-box {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.comment-box input {
  flex: 1;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
}

.comment-box button {
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #000000;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.comment-box button:hover {
  background-color: #6b6969;
}

.comments-list {
  max-height: 300px;
  overflow-y: auto;
}

.comment {
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.comment p {
  margin: 0;
}
</style>
