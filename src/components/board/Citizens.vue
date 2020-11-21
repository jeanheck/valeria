<template>
  <div id="citizens">
    <h1>Citizens</h1>
    <CitizenPile v-for="pile in this.$store.state.board.citizens" :key="pile.id" :pile="pile" />
  </div>
</template>

<script>
import CitizenPile from './piles/CitizenPile'

export default {
  name: 'Citizens',
  components: {
    CitizenPile
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #citizens {
		border: 1px solid blue;
    float: left;
		height: 50%;
    width: 30%;
	}
</style>
