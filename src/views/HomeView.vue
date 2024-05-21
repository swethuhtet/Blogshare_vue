<script>
import BlogCard from '../components/Blog/BlogCard.vue'
import Navbar from '../components/Navbar.vue'
import axios from 'axios'
export default {
  components: {
    BlogCard,
    Navbar
  },
  data() {
    return {
      blogs: []
    }
  },
  methods: {
    fetchBlogs() {
      axios
        .get('http://localhost:3000/')
        .then((response) => {
          this.blogs = response.data
        })
        .catch((error) => {
          console.error('Error fetching blogs : ', error)
        })
    }
  },
  mounted() {
    this.fetchBlogs()
  }
}
</script>

<template>
  <main>
    <Navbar/>
    <div class="home-view">
      <div class="header">
        <h1>BLOG LISTS</h1>
      </div>
      <div class="container">
        <ul>
          <li v-for="item in blogs">
            <BlogCard :key="item.id" :blog="item" />
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
ul {
  margin-top: 30px;
}
li {
  list-style-type: none;
}
.home-view {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.blog-list {
  width: 100%;
  max-width: 600px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header h1 {
  color: rgb(0, 0, 255);
  font-weight: bold;
}

.create-link {
  margin-left: 500px;
}
.create-link-btn {
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #000000; 
  border: none;
  border-radius: 4px;
  text-decoration: none; 
  display: inline-block;
}
.create-link-btn:hover{
  background-color: #4d4d4d;
}
</style>
