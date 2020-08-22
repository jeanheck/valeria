<template>
  <div id="app">
    <div id="status">
      <Resources />
      <Dices />
    </div>

    <Board />
    <Hand />
  </div>
</template>

<script>
import Dices from './components/Dices'
import Resources from './components/resources/Resources'
import Hand from './components/player/Hand'
import Board from './components/board/Board'

export default {
  name: 'App',
  components: {
    Resources, Dices, Hand, Board
  }
}
</script>

<style>
  #status {
    float: left;
  }
</style>
