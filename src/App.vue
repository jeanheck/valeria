<template>
  <div id="app">
    <div class="resources">
      <Bank />
      <Resources />
    </div>

    <Board />

    <div class="menu">
      <Duke />

      <MenuOptions />
    </div>

    <Player />
  </div>
</template>

<script>
import Bank from './components/board/Bank'
import Resources from './components/player/Resources.vue';
import Duke from './components/player/Duke.vue';
import Board from './components/board/Board.vue';
import Player from './components/player/Player.vue';
import MenuOptions from './components/board/MenuOptions';

import { startGame } from './assets/js/phases/phases.js'

export default {
  name: 'App',
  components: {
    Bank,
    Resources,
    Duke, 
    Board,
    Player,
    MenuOptions
  },
  mounted(){
    startGame(this.$store);
  }
}
</script>

<style scoped>
  /*Menu*/
  .menu {
    width: 10%; 
    height: 800px; 
    border: 1px solid black; 
    float: left;
  }
</style>
