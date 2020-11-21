<template>
  <div id="app">
    <div id="status">
      <Resources />
      <Dices />
      <Bank />
    </div>

    <Board />

    <PlayerCards />
    <ActiveEffects />
  </div>
</template>

<script>
import Dices from './components/Dices'
import Resources from './components/resources/Resources'
import Bank from './components/resources/Bank'
import Board from './components/board/Board'
import ActiveEffects from './components/player/ActiveEffects'
import PlayerCards from './components/player/PlayerCards'

import { startGame } from './assets/js/phasesController.js'

export default {
  name: 'App',
  components: {
    Resources, Dices, Board, ActiveEffects, Bank, PlayerCards
  },
  mounted(){
    startGame(this.$store);
  }
}
</script>

<style>
  #status {
    float: left;
  }
</style>
