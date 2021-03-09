<template>
  <div id="app">
    <div class="resources">
      <Bank />
      
      <div class="player">
        <div class="resource gold">
          user gold
        </div>
        <div class="resource magic">
          user magic
        </div>
        <div class="resource force">
          user force
        </div>
        <div class="resource purple">
          victory points
        </div>
        <div class="active-effects">
          Active effects
        </div>
      </div>
    </div>

    <div class="board">
      <div class="monsters">
        <div class="monster">monster</div>
        <div class="monster">monster</div>
        <div class="monster">monster</div>
        <div class="monster">monster</div>
        <div class="monster">monster</div>
      </div>
      <div class="citizens">
        <div class="citizen">citizen</div>
        <div class="citizen">citizen</div>
        <div class="citizen">citizen</div>
        <div class="citizen">citizen</div>
        <div class="citizen">citizen</div>
      </div>
      <div class="citizens">
        <div class="citizen">citizen</div>
        <div class="citizen">citizen</div>
        <div class="citizen">citizen</div>
        <div class="citizen">citizen</div>
        <div class="citizen">citizen</div>
      </div>
      <div class="domains">
        <div class="domain">domain</div>
        <div class="domain">domain</div>
        <div class="domain">domain</div>
        <div class="domain">domain</div>
        <div class="domain">domain</div>
      </div>
    </div>

    <div class="menu">
      <div class="duke">
        duke
      </div>
      <div class="duke-info">
        duke info
      </div>
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

import { startGame } from './assets/js/phases/phases.js'

export default {
  name: 'App',
  components: {
    Bank
  },
  mounted(){
    startGame(this.$store);
  }
}
</script>

<style scoped>
  /*resources*/
  .resources {
    width: 100%; 
    height: 100px;
    border: 1px solid black;
  }
  .bank {
    width: 50%; 
    height: 100px; 
    border: 1px solid black; 
    float: left;
  }
  .resource {
    width: 10%; 
    height: 90px;
    float: left;
    margin: 4px;
  }
  .gold {
    border: 1px solid gold; 
  }
  .magic {
    border: 1px solid lightskyblue; 
  }
  .force {
    border: 1px solid lightcoral; 
  }
  .purple {
    border: 1px solid purple; 
  }
  .active-effects {
    width: 50%; 
    height: 90px; 
    border: 1px solid gray;
    margin: 4px; 
    float: right;
  }
  .dices{
    width: 20%; 
    height: 90px; 
    border: 1px solid gray;
    margin: 4px; 
    float: left;
  }
  .player {
    width: 50%; 
    height: 100px; 
    border: 1px solid black; 
    float: left;
  }

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

  /*Duke*/
  .duke {
    width: 90%; 
    height: 200px;
    margin: 10px; 
    border: 1px solid purple;
  }
  .duke-info {
    width: 90%; 
    height: 200px;
    margin: 10px; 
    border: 1px solid purple;
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
