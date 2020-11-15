<template>
  <div id="app">
    <div id="status">
      <Resources />
      <Dices />
      <Bank />
    </div>

    <Board />

    <Hand />
    <KilledMonsters />
    <BuildedDomains />
    <ActiveEffects />
  </div>
</template>

<script>
import Dices from './components/Dices'
import Resources from './components/resources/Resources'
import Bank from './components/resources/Bank'
import Hand from './components/player/Hand'
import Board from './components/board/Board'
import KilledMonsters from './components/player/KilledMonsters'
import BuildedDomains from './components/player/BuildedDomains'
import ActiveEffects from './components/player/ActiveEffects'

import { startGame } from './assets/js/phasesController.js'

export default {
  name: 'App',
  components: {
    Resources, Dices, Hand, Board, KilledMonsters, BuildedDomains, ActiveEffects, Bank
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
