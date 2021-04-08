<template>
  <div id="app">
    <div class="resources">
      <Bank />
      <Resources />
    </div>

    <Board />

    <div class="menu">
      <Duke />

      <div class="menu-options">
        release soon!
      </div>
    </div>

    <div class="player-cards">
      <div class="citizens">
        buyed citizens
      </div>
      <div class="monsters">
        kiled monsters
      </div>
      <div class="domains">
        builded domains
      </div>
    </div>
  </div>
</template>

<script>
import Bank from './components/resources/Bank'
import Resources from './components/resources/Resources.vue';
import Duke from './components/player/Duke.vue';
import Board from './components/board/Board.vue';

import { startGame } from './assets/js/phases/phases.js'

export default {
  name: 'App',
  components: {
    Bank,
    Resources,
    Duke, 
    Board
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
  .menu-options {
    width: 90%; 
    height: 350px;
    margin: 10px; 
    border: 1px solid black;
  }

  /*Player-cards*/
  .player-cards {
    width: 40%;
    height: 800px;
    float: left;
  }
  .player-cards .citizens {
    width: 220px; 
    height: 810px; 
    border: 1px solid blue; 
    float: left;
  }
  .player-cards .monsters {
    width: 220px; 
    height: 810px; 
    border: 1px solid brown; 
    float: left;
  }
  .player-cards .domains {
    width: 220px; 
    height: 810px; 
    border: 1px solid green; 
    float: left;
  }
</style>
