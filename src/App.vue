<template>
  <div id="app">
    <div class="container">
      <div>
        <router-link to="/">
          <div class="title"><p>
████╗ ████║██╔═══██╗████╗  ██║██╔═══██╗      ██╔══██╗██╔══██╗██║██╔════╝╚══██╔══╝
██╔████╔██║██║   ██║██╔██╗ ██║██║<p>--MONO DRIFT - -- -- -- - - - - -     -      -  A Sublime Sci-Fi Flash Fiction</p>   ██║█████╗██║  ██║██████╔╝██║█████╗     ██║

          </div></router-link>
        <a href="https://yooksel.com/"><p class="author">@AUTHOR Hamid Yuksel</p></a>
        <div class="stories">
          <router-link class="story" to="/cactuscereal" v-scroll-to="'#story-mode'"><p class="chapter-name">The Last Accident</p>
          <p class="chapter-description">Massive funding. A clandestine machine. What does it do?</p>
          </router-link>
          <router-link class="story" to="/cactuscereal" v-scroll-to="'#story-mode'"><p class="chapter-name">Haste Maker</p>
          <p class="chapter-description">Time is short. Decisions are made. No time to think.</p>
          </router-link>
          <router-link class="story" to="/cactuscereal" v-scroll-to="'#story-mode'"><p class="chapter-name">Escape Journey</p>
          <p class="chapter-description">It will take them somewhere far away. Where no one has gone.</p>
          </router-link>
          <router-link class="story" to="/cactuscereal" v-scroll-to="'#story-mode'"><p class="chapter-name">Sustenance</p>
          <p class="chapter-description">A businessman recruits the best to build a mysterious machine</p>
          </router-link>
          <router-link class="story" to="/cactuscereal" v-scroll-to="'#story-mode'"><p class="chapter-name">Until Then</p>
          <p class="chapter-description">A businessman recruits the best to build a mysterious machine</p>
          </router-link>
          <router-link class="story" to="/cactuscereal" v-scroll-to="'#story-mode'"><p class="chapter-name">Bliss and Anger</p>
          <p class="chapter-description">A businessman recruits the best to build a mysterious machine</p>
          </router-link>
          <router-link class="story" to="/cactuscereal" v-scroll-to="'#story-mode'"><p class="chapter-name">Like Mountains</p>
          <p class="chapter-description">A businessman recruits the best to build a mysterious machine</p>
          </router-link>
          <router-link class="story" to="/cactuscereal" v-scroll-to="'#story-mode'"><p class="chapter-name">In Defeat</p>
          <p class="chapter-description">A businessman recruits the best to build a mysterious machine</p>
          </router-link>
          <router-link class="story" to="/cactuscereal" v-scroll-to="'#story-mode'"><p class="chapter-name">Maybe It's You</p>
          <p class="chapter-description">A businessman recruits the best to build a mysterious machine</p>
          </router-link>
          <router-link class="story" to="/cactuscereal" v-scroll-to="'#story-mode'"><p class="chapter-name">End Convergence</p>
          <p class="chapter-description">Awakening in a new place. Far from where he should be.</p>
          </router-link>
        </div>
      </div>
    </div>
    <div id="story-mode"><router-view/></div>
    <p class="back-to-top" v-scroll-to="'.title'">BACK TO TOP ^^^</p>
  </div>
</template>
<script>export default {name: 'App'}</script>
<style>
  #app {
    font-family: 'VT323', monospace;
    font-style: normal;
    font-size: 150%;
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
  }

  .title {
    color: black;
    padding-bottom: 10px;
    margin-bottom: -10px;
    font-size: 200%;
    margin-top: -70px;
    margin-left: -5px;
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
    border-style: solid;
    border-width: 1px;
    border-color: white;
    padding: 50px 50px 50px 50px;
    width: 200px;
  }

  .chapter-description {
    color: white;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 10px;
    padding-right: 10px;
    width: 1500px;
  }

  .author {
    border-bottom: 1px solid;
    border-color: black;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 50px;
  }

  .author:hover  {
    background-color: blue;
    border-color: blue;
    color: white;
  }

  .back-to-top {
    padding-left: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 200%;
    color: blue
  }

  .back-to-top:hover {
    background-color: blue;
    color: white;
  }

</style>
