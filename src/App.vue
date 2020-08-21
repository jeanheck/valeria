<template>
  <div id="app">
    <div id="status">
      <ForcePoints />
      <MagicPoints />
      <GoldPoints />
      <Dices />
    </div>

    <PlayerCards />
  </div>
</template>

<script>
import ForcePoints from './components/points/Force.vue'
import MagicPoints from './components/points/Magic.vue'
import GoldPoints from './components/points/Gold.vue'
import Dices from './components/Dices.vue'
import PlayerCards from './components/PlayerCards.vue'

export default {
  name: 'App',
  components: {
    ForcePoints, MagicPoints, GoldPoints, Dices, PlayerCards
  }
}
</script>

<style>
  #status {
    float: left;
  }
</style>
