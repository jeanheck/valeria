<template>
  <div id="app">
    <div id="status">
      <Resources />
      <Dices />
    </div>

    <Board />

    <Hand />
    <KilledMonsters />
    <BuildedDomains />
  </div>
</template>

<script>
import Dices from './components/Dices'
import Resources from './components/resources/Resources'
import Hand from './components/player/Hand'
import Board from './components/board/Board'
import KilledMonsters from './components/player/KilledMonsters'
import BuildedDomains from './components/player/BuildedDomains'

import { startGame } from './assets/js/phasesController.js'

export default {
  name: 'App',
  components: {
    Resources, Dices, Hand, Board, KilledMonsters, BuildedDomains
  },
  mounted(){
    startGame(this.$store)
  }
}
</script>

<style>
  #status {
    float: left;
  }
</style>
