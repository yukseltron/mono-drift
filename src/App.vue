<template>
  <div id="app">
    <div class="container">
      <div>
        <router-link to="/"><h1>Splash of Sublime</h1></router-link>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/cactuscereal">Cactus Cereal</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/chimera">Chimera</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dreamsofamonster">Dreams of a Monster</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/thelastkingbalthazar">The Last King Balthazar</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>export default {name: 'App'}</script>
