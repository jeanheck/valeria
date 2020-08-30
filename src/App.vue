<template>
  <div id="app">
    <div id="status">
      <Resources />
      <Dices />
    </div>

    <Board />

    <Hand />
    <KilledMonsters />
  </div>
</template>

<script>
import Dices from './components/Dices'
import Resources from './components/resources/Resources'
import Hand from './components/player/Hand'
import Board from './components/board/Board'
import KilledMonsters from './components/player/KilledMonsters'

export default {
  name: 'App',
  components: {
    Resources, Dices, Hand, Board, KilledMonsters
  }
}
</script>

<style>
  #status {
    float: left;
  }
</style>
