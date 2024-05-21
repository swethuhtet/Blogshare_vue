<script>
import Navbar from '../components/Navbar.vue'
import SelectBox from '../components/Blog/SelectBox.vue'
import axios from 'axios'
export default {
  components: {
    Navbar,
    SelectBox
  },
  data() {
    return {
      title: '',
      body: '',
      categoryId: '',
      categories: [],
      selectedCat: null
    }
  },
  methods: {
    fetchBlog() {
      const blogId = this.$route.params.id
      axios
        .get(`http://localhost:3000/blogs/${blogId}`)
        .then((response) => {
          this.blog = response.data
          this.title = this.blog.title
          this.body = this.blog.body
          this.selectedCat = this.blog.category_id
        })
        .catch((error) => {
          console.error(error)
        })
    },
    fetchCategories() {
      axios
        .get('http://localhost:3000/categories/index')
        .then((response) => {
          this.categories = response.data
        })
        .catch((error) => {
          console.error('Error fetching categories : ', error)
        })
    },
    onSubmit() {
      const updatedBlog = {
        title: this.title,
        body: this.body,
        category_id: this.categoryId ? this.categoryId : this.selectedCat
      }
      axios
        .patch(`http://localhost:3000/blogs/${this.blog.id}`, updatedBlog)
        .then((response) => {
          console.log('Blog updated:', response.data.title)
          this.$router.push('/')
        })
        .catch((error) => {
          console.error('Error updating blog:', error)
        })
    }
  },
  mounted() {
    this.fetchBlog(), this.fetchCategories()
  }
}
</script>

<template>
  <div>
    <Navbar />
    <div class="container">
      <h1>EDIT BLOG</h1>
      <div class="form-container">
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="title">Title</label>
            <input type="text" v-model="title" id="title" name="title" required />
          </div>
          <div class="form-group">
            <label for="body">Body</label>
            <textarea id="body" v-model="body" name="body" required></textarea>
          </div>
          <div class="form-group">
            <label for="category">Category</label>
            <SelectBox
              :selectedCat="this.selectedCat"
              :categories="this.categories"
              @categoryChanged="(msg) => (categoryId = msg)"
            />
          </div>
          <div class="form-actions">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  flex-direction: column;
}
.container h1 {
  font-weight: bold;
  color: rgb(0, 0, 255);
}
.form-container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  margin-top: 20px;
}

.form-container h1 {
  margin-bottom: 20px;
  font-size: 1.5rem;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 500;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

.form-group textarea {
  resize: vertical;
  height: 100px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}

.form-actions button {
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #0d0d0d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.form-actions button:hover {
  background-color: #4d4d4d;
}
</style>
