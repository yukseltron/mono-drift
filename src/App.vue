<template>
  <div id="app">
    <div class="container">
      <div>
        <router-link to="/">
          <div class="title"><pre>

   ███╗   ███╗ ██████╗ ███╗   ██╗ ██████╗       ██████╗ ██████╗ ██╗███████╗████████╗
    ████╗ ████║██╔═══██╗████╗  ██║██╔═══██╗      ██╔══██╗██╔══██╗██║██╔════╝╚══██╔══╝
  ██╔████╔██║██║   ██║██╔██╗ ██║██║   ██║█████╗██║  ██║██████╔╝██║█████╗     ██║
   ██║╚██╔╝██║██║   ██║██║╚██╗██║██║   ██║╚════╝██║  ██║██╔══██╗██║██╔══╝     ██║
    ██║ ╚═╝ ██║╚██████╔╝██║ ╚████║╚██████╔╝      ██████╔╝██║  ██║██║██║        ██║
      ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝       ╚═════╝ ╚═╝  ╚═╝╚═╝╚═╝        ╚═╝


          </pre></div></router-link>
        <p>Sublime Sci-Fi Flash Fiction</p>
        <ul class="stories">
          <li class="story">
            <router-link to="/cactuscereal">Cactus Cereal</router-link>
          </li>
          <li class="story">
            <router-link to="/chimera">Chimera</router-link>
          </li>
          <li class="story">
            <router-link to="/dreamsofamonster">Dreams of a Monster</router-link>
          </li>
          <li class="story">
            <router-link to="/thelastkingbalthazar">The Last King Balthazar</router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>export default {name: 'App'}</script>
<style>
  #app {
    font-family: 'VT323', monospace;
    font-style: normal;
  }

  .container {
    text-align: center;
  }

  .title {
    color: black;
    display: inline-block;
    font-size: 2vmin;
  }

  .title:hover {
    color: white;
    background-color: black;
  }

  .story{
    text-align: left;
  }
</style>
