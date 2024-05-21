<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>
  <router-link :to="'/blogs/' + blog.id" class="blog-card">
    <h2 class="blog-title">{{ blog.title }}</h2>
    <p class="blog-body">{{ blog.body }}</p>
  </router-link>
</template>

<style scoped>
.blog-card {
  display: block;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  transition: transform 0.3s ease;
  text-decoration: none;
  color: #000000;
}

.blog-card:hover {
  cursor: pointer;
  transform: translateY(-5px);
}

.blog-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.blog-content {
  font-size: 1rem;
  color: #555;
}
</style>
