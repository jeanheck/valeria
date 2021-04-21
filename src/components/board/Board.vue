<template>
  <div class="board">
    <Sector :piles="this.$store.state.board.monsters" :pileType="'Monster'" />
    <Sector :piles="this.$store.state.board.citizens" :pileType="'Citizen'" />
    <Sector :piles="this.$store.state.board.domains" :pileType="'Domain'" />
  </div>
</template>

<script>
import Sector from './cards/Sector'

export default {
  name: 'Board',
  components: {
    Sector
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .board {
    width: 50%; 
    height: 800px; 
    border: 1px solid black; 
    float: left;
  }
</style>