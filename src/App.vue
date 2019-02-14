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
        <div class="stories">
          <router-link class="story" to="/cactuscereal"><p class="chapter-name">The Last Accident</p>
          <p class="chapter-description">Massive funding. A clandestine machine. What does it do?</p>
          </router-link>
          <router-link class="story" to="/cactuscereal"><p class="chapter-name">Haste Maker</p>
          <p class="chapter-description">Time is short. Decisions are made. No time to think.</p>
          </router-link>
          <router-link class="story" to="/cactuscereal"><p class="chapter-name">Escape Journey</p>
          <p class="chapter-description">It will take them somewhere far away. Where no one has gone.</p>
          </router-link>
          <router-link class="story" to="/cactuscereal"><p class="chapter-name">Sustenance</p>
          <p class="chapter-description">A businessman recruits the best to build a mysterious machine</p>
          </router-link>
          <router-link class="story" to="/cactuscereal"><p class="chapter-name">Until Then</p>
          <p class="chapter-description">A businessman recruits the best to build a mysterious machine</p>
          </router-link>
          <router-link class="story" to="/cactuscereal"><p class="chapter-name">Bliss and Anger</p>
          <p class="chapter-description">A businessman recruits the best to build a mysterious machine</p>
          </router-link>
          <router-link class="story" to="/cactuscereal"><p class="chapter-name">Like Mountains</p>
          <p class="chapter-description">A businessman recruits the best to build a mysterious machine</p>
          </router-link>
          <router-link class="story" to="/cactuscereal"><p class="chapter-name">In Defeat</p>
          <p class="chapter-description">A businessman recruits the best to build a mysterious machine</p>
          </router-link>
          <router-link class="story" to="/cactuscereal"><p class="chapter-name">Maybe It's You</p>
          <p class="chapter-description">A businessman recruits the best to build a mysterious machine</p>
          </router-link>
          <router-link class="story" to="/cactuscereal"><p class="chapter-name">End Convergence</p>
          <p class="chapter-description">Awakening in a new place. Far from where he should be.</p>
          </router-link>
        </div>
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
  }

  .story {
    display: flex;
    flex-direction: row;
    margin-bottom: -25px;
  }

  .story:hover .chapter-description{
    background-color: blue;
  }

  .story:hover .chapter-name{
    border-color: blue;
  }

  .chapter-name {
    width: 150px;
    border-style: solid;
    border-width: 1px;
    border-color: white;
    padding-left: 2px;
  }

  .chapter-description {
    color: white;
    padding-left: 10px;
    padding-right: 10px;
    width: 500px;
  }

  .personal:hover {
    text-decoration: underline;
  }

</style>
