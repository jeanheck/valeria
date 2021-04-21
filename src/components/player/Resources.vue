<template>
  <div class="player">
    <Resource v-for="resource in Object.keys(this.$store.state.player.resources)" :key="resource" :resource="resource" />
    <ActiveEffects />
  </div>
</template>

<script>
import Resource from './Resource'
import ActiveEffects from '../player/ActiveEffects'

export default {
  name: 'Resources',
  components: {
    Resource, ActiveEffects
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .player {
    width: 50%; 
    height: 100px; 
    border: 1px solid black; 
    float: left;
  }
  .active-effects {
    width: 50%; 
    height: 90px; 
    border: 1px solid gray;
    margin: 4px; 
    float: right;
  }
</style>