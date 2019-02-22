<template>
  <div id="app">
    <div class="container">
      <div>
        <router-link to="/">
          <div class="title"><p>
████╗ ████║██╔═══██╗████╗  ██║██╔═══██╗      ██╔══██╗██╔══██╗██║██╔════╝╚══██╔══╝
██╔████╔██║██║   ██║██╔██╗ ██║██║<p>--  -  --    -MONO DRIFT - --      -  A Sublime Sci-Fi Flash Fiction</p>   ██║█████╗██║  ██║██████╔╝██║█████╗     ██║

          </div></router-link>
        <a href="https://yooksel.com/"><p class="author">@AUTHOR Hamid Yuksel</p></a>
        <div class="stories">
          <router-link class="story" to="/s1" v-scroll-to="'#story-mode'"><p class="chapter-name">The Last Accident</p>
          <p class="chapter-description">Massive funding. A clandestine machine. What does it do?</p>
          </router-link>
          <router-link class="story" to="/s2" v-scroll-to="'#story-mode'"><p class="chapter-name">Haste Maker</p>
          <p class="chapter-description">They're after you. Need to hurry. No time to think.</p>
          </router-link>
          <router-link class="story" to="/s3" v-scroll-to="'#story-mode'"><p class="chapter-name">Escape</p>
          <p class="chapter-description">Take us far way. Someplace no one has seen.</p>
          </router-link>
          <router-link class="story" to="/s4" v-scroll-to="'#story-mode'"><p class="chapter-name">Suspension Theory</p>
          <p class="chapter-description">How did you allow a monstrosity of such scale?</p>
          </router-link>
          <router-link class="story" to="/s5" v-scroll-to="'#story-mode'"><p class="chapter-name">Understanding The Machine</p>
          <p class="chapter-description">Please uncouple the gamma link modules. They're pesty.</p>
          </router-link>
          <router-link class="story" to="/s6" v-scroll-to="'#story-mode'"><p class="chapter-name">Bless The Angry</p>
          <p class="chapter-description">I can feel it. Inside me. What do I do now?</p>
          </router-link>
          <router-link class="story" to="/s7" v-scroll-to="'#story-mode'"><p class="chapter-name">Limited Tomorrow</p>
          <p class="chapter-description">Put your trust and future in our capable hands.</p>
          </router-link>
          <router-link class="story" to="/s8" v-scroll-to="'#story-mode'"><p class="chapter-name">In Defiance</p>
          <p class="chapter-description">If we were to obey the rules, we'd never have come this far.</p>
          </router-link>
          <router-link class="story" to="/s9" v-scroll-to="'#story-mode'"><p class="chapter-name">Maybe It's You</p>
          <p class="chapter-description">Maybe it isn't.</p>
          </router-link>
          <router-link class="story" to="/s10" v-scroll-to="'#story-mode'"><p class="chapter-name">End Converge</p>
          <p class="chapter-description">Awake in a new place. Far from where he should be.</p>
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
    color: blue;
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
    border-color: blue;
    padding-top: 25px;
    padding-bottom: 25px;
    padding-left: 50px;
  }

  .author:hover  {
    background-color: blue;
    border-color: blue;
    color: white;
  }

  .back-to-top {
    border-top: 1px solid blue;
    padding-left: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 200%;
    color: blue
  }

  .back-to-top:hover {
    background-color: blue;
    color: white;
    border-top-color: blue;
  }

</style>
