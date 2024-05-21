<script>
import Navbar from '../components/Navbar.vue'
export default{
  components:{
    Navbar
  }
}
</script>

<template>
  <div>
    <Navbar/>
    <h1 class="about">This is an about page</h1>
  </div>
</template>

<style>
.about{
  text-align: center;
}
</style>
