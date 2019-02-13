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
        <p>A Sublime Sci-Fi Flash Fiction</p>
        <p>by <a class="personal" href="https://yooksel.com/">Hamid Yuksel</a></p>
        <ol class="stories">
          <li class="story">
            <router-link to="/cactuscereal">The Machine</router-link>
          </li>
          <li class="story">
            <router-link to="/chimera">The Journey</router-link>
          </li>
          <li class="story">
            <router-link to="/dreamsofamonster">The Gates</router-link>
          </li>
          <li class="story">
            <router-link to="/thelastkingbalthazar">The Last King Balthazar</router-link>
          </li>
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
            <router-link to="/thelastkingbalthazar">The Last King</router-link>
          </li>
          <li class="story">
            <router-link to="/dreamsofamonster">The Dreams</router-link>
          </li>
          <li class="story">
            <router-link to="/thelastkingbalthazar">The Convergence</router-link>
          </li>
        </ol>
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

  a {
    text-decoration: none;
  }

  a:visited {
    color: blue;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
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

  .stories{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .story {
    margin-bottom: 8px;
    text-align: left;
  }

  .story:hover {
    background-color: blue;
  }

  .personal:hover {
    text-decoration: underline;
  }

</style>
