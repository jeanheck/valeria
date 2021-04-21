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

    <PlayerCards />
  </div>
</template>

<script>
import Bank from './components/resources/Bank'
import Resources from './components/resources/Resources.vue';
import Duke from './components/player/Duke.vue';
import Board from './components/board/Board.vue';
import PlayerCards from './components/player/PlayerCards.vue';
import MenuOptions from './components/board/MenuOptions';

import { startGame } from './assets/js/phases/phases.js'

export default {
  name: 'App',
  components: {
    Bank,
    Resources,
    Duke, 
    Board,
    PlayerCards,
    MenuOptions
  },
  mounted(){
    startGame(this.$store);
  }
}
</script>

<style scoped>
  /*board*/
  .board {
    width: 50%; 
    height: 800px; 
    border: 1px solid black; 
    float: left;
  }
  .monsters {
    width: 100%; 
    height: 200px; 
    border: 1px solid brown;
  }
  .monster {
    width: 19%; 
    height: 175px; 
    border: 1px solid brown;
    margin-top: 10px;
    margin-left: 7px;
    float: left;
  }

  .citizens {
    width: 100%; 
    height: 200px; 
    border: 1px solid blue;
  }
  .citizen {
    width: 19%; 
    height: 175px; 
    border: 1px solid blue;
    margin-top: 10px;
    margin-left: 7px;
    float: left;
  }

  .domains {
    width: 100%; 
    height: 200px; 
    border: 1px solid green;
  }
  .domain {
    width: 19%; 
    height: 175px; 
    border: 1px solid green;
    margin-top: 10px;
    margin-left: 7px;
    float: left;
  }

  /*Menu*/
  .menu {
    width: 10%; 
    height: 800px; 
    border: 1px solid black; 
    float: left;
  }
</style>
