<template>
  <div id="app">
    <div id="status">
      <Resources />
      <Dices />
    </div>

    <Hand />
  </div>
</template>

<script>
import Dices from './components/Dices'
import Resources from './components/resources/Resources'
import Hand from './components/player/Hand'

export default {
  name: 'App',
  components: {
    Resources, Dices, Hand
  }
}
</script>

<style>
  #status {
    float: left;
  }
</style>
