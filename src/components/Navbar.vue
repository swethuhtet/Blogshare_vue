<script></script>

<template>
  <div>
    <nav class="navbar">
      <div class="navbar-container">
        <a href="index.html" class="navbar-brand">BlogShare</a>
        <ul class="navbar-menu">
          <li class="navbar-item"><RouterLink class="navbar-link" to="/">Home</RouterLink></li>
          <li class="navbar-item"><RouterLink class="navbar-link" to="/about">About</RouterLink></li>
          <li class="navbar-item"><RouterLink class="navbar-link" to="/create">Create</RouterLink></li>
          <li class="navbar-item"><RouterLink class="navbar-link" to="#">Profile</RouterLink></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style>
.navbar {
  background-color: #333;
  padding: 1em 0;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.navbar-brand {
  color: #fff;
  font-size: 1.5em;
  text-decoration: none;
}

.navbar-menu {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-item {
  margin-left: 20px;
}

.navbar-link {
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  transition: background-color 0.3s;
}

.navbar-link:hover {
  background-color: #575757;
  border-radius: 5px;
}
</style>
