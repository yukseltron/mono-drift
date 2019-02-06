<template>
  <div id="app">
    <div class="container">
      <div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/fiction">Fiction</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/poetry">Poetry</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/rambles">Rambles</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
  export default {
    name: 'App'
  }
</script>
<style>
  #app {

  }
</style>
