<template>
  <div id="board">
    <h1>Board</h1>
    <Sector :title="'Citizens'" :piles="this.$store.state.board.citizens" :pileType="'CitizenPile'" />
    <Sector :title="'Monsters'" :piles="this.$store.state.board.monsters" :pileType="'MonsterPile'" />
    <Sector :title="'Domains'" :piles="this.$store.state.board.domains" :pileType="'DomainPile'" />
  </div>
</template>

<script>
import Sector from './Sector'

export default {
  name: 'Board',
  components: {
    Sector
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #board {
		border: 1px solid black;
		width: 60%;
    height: 100%;
		float: left;
	}
</style>